'use client';

import Image from 'next/image'
import Post from './components/post/post'

export default function Home() {
  return (
    <>
      <div className="container">
        <Post />
      </div>
    </>
  )
}
