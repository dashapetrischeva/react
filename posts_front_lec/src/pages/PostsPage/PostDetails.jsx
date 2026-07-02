import React from 'react'
import { useGetPostByIdQuery } from '../../api/postsApi'

const PostDetails = ({ postId }) => {
  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostByIdQuery(postId, {
    skip: !postId,
  })

  if (!postId) return <p>Select a post to view its details.</p>
  if (isLoading) return <p>Loading details...</p>
  if (isError) return <p>Failed to load post details.</p>

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '20px',
      }}
    >
      <h3>{post.title}</h3>
      <p>ID: {post.id}</p>
      <p>Publication Date: {new Date(post.publicationDate).toLocaleString()}</p>
      <p>Likes: {post.likesNumber}</p>
      <p>Dislikes: {post.dislikesNumber}</p>
      <p>{post.content || 'No description available.'}</p>
    </div>
  )
}

export default PostDetails