'use client';

import Image from 'next/image'
import Post from './components/post/post'
import Comment from './components/comment/comment'
import SkeletonPost from './components/post/SkeletonPost';
import SkeletonSideComments from './components/sideComments/SkeletonSideComments';
import { useEffect, useState } from 'react';
import SkeletonComment from './components/comment/SkeletonComment';
import ModalUp from './components/modal/modal';
import getPosts from './api/api';
import axios from "axios";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  console.log(posts)
  return (
    <>
      {loading ?
        <SkeletonPost />
        :
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
      {/* {loading ?
        <SkeletonComment />
        :
        <Comment />
      } */}
    </>
  )
}

