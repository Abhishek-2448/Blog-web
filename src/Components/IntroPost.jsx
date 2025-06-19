import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function IntroPost({post}) { 
  const navigate=useNavigate();  
  return (
    <div className='grid grid-cols-1 cursor-pointer
     md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'  
     onClick={()=>navigate('blog-detail/'+post.id)}>
        <img src={post.coverImage} className='
        rounded-2xl object-cover w-full h-full'/>
        <div>
            <h4 className='text-red-500'>{post.tag}</h4>
            <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
            <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.desc}</h4>
        <div className='flex items-center mt-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY45j61BWtSml1Q91szSdrTAj2ileT7b120A&s"
            className='w-[50px] rounded-full'/>
            <div className='ml-2'>
                <h3 className='font-bold '>My blog</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IntroPost

