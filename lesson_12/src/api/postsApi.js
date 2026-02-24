import axios from 'axios'

const baseUrl = 'https://backend12-0fnd.onrender.com'

export const loadPosts = async ({ page = 1, limit = 10 }) => {
	const res = await axios.get(`${baseUrl}/posts`, {
		params: {
			page,
			limit,
		},
	})
	return res?.data
}

export const removePost = async (postId) => {
	const res = await axios.delete(`${baseUrl}/posts/${postId}`);
	return res.data;
};

export const createPost = async (newPost) => {
	const res = await axios.post(`${baseUrl}/posts`, newPost);
	return res.data;
};
