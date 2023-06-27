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
import { CustomButton } from '../buttons/buttons'
import { createPost } from "../../api/api"
import { MenuBar } from './MenuBar'

const Title = Heading.extend({
  name: "title",
  group: "title",
  parseHTML: () => [{ tag: "h1:first-child" }],
}).configure({ levels: [1] });

const DocumentWithTitle = Document.extend({
  content: "title block+",
});



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

