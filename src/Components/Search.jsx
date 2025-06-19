import React from 'react';
import banner from './../assets/Images/banner.jpg';
import { IoSearchOutline } from "react-icons/io5";
import GlobalApi from '../Services/GlobalApi';

function Search({ selectedTag }) {
    const tags = [
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'Gaming',
        },
        {
            id: 3,
            name: 'News',
        },
        {
            id: 4,
            name: 'Politics',
        },
    ];

    return (
        <div className='flex justify-center mt-8 flex-col px-[500] md:px-[450px]'>
            <img src={banner} className='rounded-2xl mb-10' />
            <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[23%] flex items-center'>
                <IoSearchOutline className='text-[20px] text-gray-400' />
                <input type='text' placeholder='Search' className='outline-none ml-2 w-full' />
            </div>
            <div className='flex gap-10 justify-center mt-5'>
                {tags.map((item) => (
                    <ul
                        key={item.id}
                        onClick={() => selectedTag(item.name)}
                        className={` md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-red-500`}
                    >
                        <li className='line-clamp-1'>{item.name}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Search;
