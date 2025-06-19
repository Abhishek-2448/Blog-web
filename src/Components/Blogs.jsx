import React from 'react'
import { useNavigate } from 'react-router-dom'

function Blogs({posts}) {
  const navigate=useNavigate();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-10 md:px-15 lg:px-32'>
      {posts.map((item)=>(
        <div key={item.id} className='m-4 cursor-pointer' onClick={()=>navigate('blog-detail/'+item.id)} >
           <img src={item.coverImage} className='w-full rounded-2xl
           '/>
           <h3 className='text-red-500 mt-3'>{item.tag}</h3>
           <h3 className='font-bold mt-3'>{item.title}</h3>
           <h3 className='line-clamp-3 text-gray-400 mt-3'>{item.desc}</h3>
           <div className='flex items-center mt-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY45j61BWtSml1Q91szSdrTAj2ileT7b120A&s"
            className='w-[35px] rounded-full'/>
            <div className='ml-2'>
                <h3 className='font-bold text-[12px]'>My Blog</h3>
            </div>
        </div>
        </div>
      ))}
       
    </div>
  )
}

export default Blogs