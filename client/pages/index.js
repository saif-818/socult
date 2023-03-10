import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import Sidebar from '@/components/Sidebar'
import PostField from '@/components/PostField'
import PostCard from '@/components/PostCard'
import {FollowCard} from '@/components/FollowCard'
import React, { useState } from 'react';
import VideoPost from '@/components/VideoPost'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const[toggle,setToggle]=useState(true);
  const[theme,setTheme]=useState(false);
  const handleClick = () => {
       setToggle(toggle => !toggle);
  }
  return (
    <div className='flex mt-4 max-w-6xl mx-auto gap-6'>
       <div className='w-3/6'>
          <Sidebar />
       </div>
       <div className='w-5/6'>
          <PostField />
          <Card>
               <div className="flex gap-4">
                  
                  <button onClick={handleClick} className="text-socialBlue">Photos</button>
                  <button onClick={handleClick}>Videos</button>
               </div>
          </Card>
          {
            toggle ? <PostCard/> : <VideoPost />
          }
       </div>
       <div className='w-2/6'>
        <FollowCard />
       </div>
    </div>
  )
}
