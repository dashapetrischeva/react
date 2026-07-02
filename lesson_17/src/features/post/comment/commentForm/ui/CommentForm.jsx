import { useState } from 'react'
import { useCreateCommentMutation } from '../model/createCommentApi'

export function CommentForm({ postId }) {
	const [content, setContent] = useState('')
	const [createComment, { isLoading }] = useCreateCommentMutation()

	const onSubmit = async (e) => {
		e.preventDefault()
		if (!content.trim()) return
		await createComment({ postId, text: content })
		setContent('')
	}

	return (
		<form onSubmit={onSubmit} style={{ marginTop: 10 }}>
			<textarea
				value={content}
				onChange={(e) => setContent(e.target.value)}
				rows={3}
				placeholder="Write a comment..."
				required
				style={{ width: '100%', backgroundColor: 'grey', color: 'black' }}
			/>
			<button type="submit" disabled={isLoading}>
				Add Comment
			</button>
		</form>
	)
}