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
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
import Youtube from '@tiptap/extension-youtube'
import React from 'react'
import './styles.scss'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Placeholder from '@tiptap/extension-placeholder'
import { CustomButton } from '../buttons/buttons'
import { createPost } from "../../api/api"
import { MenuBar } from './MenuBar'
import CustomImage from './Image'

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
      Image,
      Dropcursor,
      Paragraph,
      CustomImage,
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
      }),
      Youtube.configure({
        inline: false,
        width: 480,
        height: 320,
      }),
      Placeholder.configure({
        showOnlyCurrent: false,
        placeholder: ({ node }) => {
          if (node.type.name === "title") {
            return "What's the title?";
          }
          return "What's the story?";
        },
      }),
    ],
    content: `
    <h1>Заголовок поста</h1>
    <p>Поведай миру о своих свершениях</p>
    <img src="https://source.unsplash.com/K9QHL52rE2k/400x200" />
    <div data-youtube-video>
    <iframe src="https://www.youtube.com/watch?v=cqHqLQgVCgY"></iframe>
    </div>
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

