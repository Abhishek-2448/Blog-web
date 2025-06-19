import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import GlobalApi from '../Services/GlobalApi'

function Home() {
  const [post, setPost] = useState([])
  const [orgPost, setOrgPost] = useState([])

  useEffect(() => {
    getPost();
  }, [])
  const getPost = () => {
    GlobalApi.getPost()
      .then(resp => {
        const result = resp.data.map(item => ({
          id: item.id,
          title: item.title,
          desc: item.description,
          tag: item.tag_list?.[0] || 'General',
          coverImage: item.cover_image || `https://picsum.photos/seed/${item.id}/600/300`,
        }));
        setPost(result);
        setOrgPost(result);
      })
      .catch(err => console.error('Fetching DEV.to posts failed:', err));
  };

  return (
    <div >

      {/* Search */}
      <Search selectedTag={(tag) => filterPost(tag)} />
      {/* IntroPost */}
      {post.length > 0 ? <IntroPost post={post[0]} /> : null}
      {/* Blogs */}
      {post.length > 0 ? <Blogs posts={post} /> : null}

    </div>
  )
}

export default Home