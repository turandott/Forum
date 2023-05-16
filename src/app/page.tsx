'use client';

import Image from 'next/image'
import Post from './components/post/post'
import Comment from './components/comment/comment'
import Navbar from './components/navbar/navbar';

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="main">
          <Post />
          <Comment />
        </div>
      </div>
    </>
  )
}
