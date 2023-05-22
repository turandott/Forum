'use client';

import Image from 'next/image'
import Post from './components/post/post'
import Comment from './components/comment/comment'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import SideComments from './components/sideComments/sideComments';

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="main">
          <Sidebar />
          <SideComments/>
          <Post />
          <Comment />
        </div>
      </div>
    </>
  )
}
