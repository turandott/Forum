'use client';

import Image from 'next/image'
import Post from './components/post/post'
import Comment from './components/comment/comment'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import SideComments from './components/sideComments/sideComments';
import SkeletonPost from './components/post/SkeletonPost';
import SkeletonSideComments from './components/sideComments/SkeletonSideComments';
import { useEffect, useState } from 'react';
import SkeletonComment from './components/comment/SkeletonComment';

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading ?
        <SkeletonPost />
        :
        <Post />
      }
      {loading ?
        <SkeletonComment />
        :
        <Comment />
      }

    </>
  )
}
