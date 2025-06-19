import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../Services/GlobalApi';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            getBlogById();
        }
    }, [id]);

    const getBlogById = () => {
        GlobalApi.getPostById(id).then(resp => {
            const item = resp.data;
            const result = {
                id: item.id,
                title: item.title,
                desc: item.body_markdown,
                tags: Array.isArray(item.tag_list) ? item.tag_list.join(', ') : item.tags || 'No Tags',
                coverImage: item.cover_image
            };
            setPost(result);
            console.log("Result", result);
        }).catch(error => {
            console.error('Error fetching blog post:', error);
        });
    };


    if (!post) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className='px-6 md:px-20 lg:px-56 mt-10'>
            <h3 className='text-red-500 text-[12px]'>{post.tags}</h3>
            <h3 className='text-[23px] font-bold'>{post.title}</h3>
            <div className='flex items-center mt-5'>
                <img
                    src="https://www.shutterstock.com/image-photo/banff-national-park-lake-minnewanka-600nw-2527379207.jpg"
                    alt="Author"
                    className='w-[35px] rounded-full'
                />
                <div className='ml-2'>
                    <h3 className='font-bold text-[12px]'>My Blog</h3>
                </div>
            </div>
            {post.coverImage && (
                <img
                    src={post.coverImage}
                    alt="Blog Cover"
                    className='rounded-2xl mt-5 mb-5 w-full'
                />
            )}
            <ReactMarkdown children={post.desc} className='leading-9' />
        </div>
    );
}

export default BlogDetail;
