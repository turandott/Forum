"use client"
import { EditorContent, useEditor } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Blockquote from '@tiptap/extension-blockquote'
import Heading from "@tiptap/extension-heading";
import React from 'react'
import './styles.scss'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { Button } from '@mui/material'
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from "react-icons/fa"
import { CustomButton } from '../buttons/buttons'
import { createPost } from "../../api/api"

const Title = Heading.extend({
  name: "title",
  group: "title",
  parseHTML: () => [{ tag: "h1:first-child" }],
}).configure({ levels: [1] });

const DocumentWithTitle = Document.extend({
  content: "title block+",
});

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="menuBar">
      <div>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FaBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <FaItalic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <FaStrikethrough />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          code
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading1', { level: 1 }) ? 'is-active' : ''}
        >
          <FaHeading />
          <span>1</span>
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          <FaHeading className="heading2" />
          <span>2</span>
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          <FaHeading className="heading3" />
          <span>3</span>
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FaListUl />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FaListOl />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          code block
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <FaQuoteLeft />
        </Button>
        <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          horizontal rule
        </Button>
        <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </Button>
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <FaUndo />
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <FaRedo />
        </Button>
      </div>
    </div>
  )
}


export default function RichTextEditor() {

  const editor = useEditor({
    extensions: [
      StarterKit,
      DocumentWithTitle,
      Title,
      Paragraph,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc',
        }
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: ' list-decimal'
        }
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: 'blockquote',
        },
      })
    ],
    content: 
    `
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.</h4>
      `,
  });

  function handleCreatePost(editor) {
    const text = editor.getText();
    console.log(text);
  }

  return (
    <div className="max-w-[750px]">
      <div className="textEditor">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} className="h-[500px]" />
      </div>
      <button onClick={()=>console.log(editor?.getJSON())}>кнопка</button>
      <CustomButton type="shadow" text="создать пост" onClick={() => handleCreatePost(editor)} />
    </div>
  );
}

