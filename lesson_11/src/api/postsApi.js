import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const loadPosts = async () => {
	const res = await axios.get(`${baseUrl}/posts`, {
	})
	return res?.data
}
