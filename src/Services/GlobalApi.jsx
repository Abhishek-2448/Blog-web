import axios from 'axios';

const BASE_URL = 'https://dev.to/api/articles';

const getPost = () =>
  axios.get('https://dev.to/api/articles?per_page=30', {
    headers: { 'User-Agent': 'my-blog-app' }
  });

const getPostById = (id) =>
  axios.get(`https://dev.to/api/articles/${id}`, {
    headers: { 'User-Agent': 'my-blog-app' }
  });

export default {
  getPost,
  getPostById
};
