import { useSelector } from 'react-redux'
import { CommentItem, useGetCommentsByPostQuery } from '@/entities/post/comments'
import DeleteCommentButton from '@/features/post/comment/deleteComment/ui/DeleteComment'

export function CommentList({ postId }) {
	const { data, isLoading, error } = useGetCommentsByPostQuery({
		postId,
	})

	const user = useSelector((state) => state.auth.user)
	const isAuthenticated = Boolean(user)

	if (isLoading) return <div>Loading comments...</div>
	if (error) return <div>Error: {error.toString()}</div>

	const comments = data || []

	return (
		<div style={{ marginTop: 10 }}>
			<h4>Comments</h4>

			{comments.map((c) => {
				const actions = isAuthenticated
					? [<DeleteCommentButton key="delete" comment={c} />]
					: []

				return (
					<CommentItem
						key={c.id}
						comment={c}
						actions={actions}
					/>
				)
			})}
		</div>
	)
}