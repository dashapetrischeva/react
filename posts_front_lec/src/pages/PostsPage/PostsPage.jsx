import { useState } from 'react'
import PostsList from './PostsList'
import PostDetails from './PostDetails'
import { Link } from 'react-router'

const PostsPage = () => {
  const [selectedPostId, setSelectedPostId] = useState(null)

  return (
    <div>
      <h2>Posts Page</h2>
      <PostDetails postId={selectedPostId} />
      <PostsList onSelect={setSelectedPostId} />
      <Link to="/posts/edit">
        <button>➕ Add New Post</button>
      </Link>
    </div>
  )
}

export default PostsPage
