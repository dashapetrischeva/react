import { Fragment, useEffect } from 'react'
import { useGetPostsInfiniteQuery } from '@/api/postsApi'
import { useScrollToBottom } from '@/hooks/useScrollToBottom'

const PostsInfinitePage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isSuccess,
  } = useGetPostsInfiniteQuery()

  const isBottom = useScrollToBottom()

  useEffect(() => {
    if (
      isBottom &&
      hasNextPage &&
      !isLoading &&
      !isFetchingNextPage &&
      isSuccess
    ) {
      fetchNextPage()
    }
  }, [
    isBottom,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    fetchNextPage,
  ])

  if (isLoading) return <p>Loading...</p>
  if (!isSuccess) return <p>Failed to load posts.</p>

  return (
    <div>
      <h2>Infinite Post Loading</h2>

      {data.pages.map((page, i) => (
        <Fragment key={i}>
          {page.items.map((post) => (
            <div
              key={post.id}
              style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}
            >
              <h4>{post.title}</h4>
              <p>
                Likes: {post.likesNumber} | Dislikes: {post.dislikesNumber}
              </p>
            </div>
          ))}
        </Fragment>
      ))}

      {isFetchingNextPage && <p>Loading next page...</p>}
      {!hasNextPage && <p>No more posts.</p>}
    </div>
  )
}

export default PostsInfinitePage