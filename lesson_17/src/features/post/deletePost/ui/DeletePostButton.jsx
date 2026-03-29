export function DeletePostButton({ post, onDelete }) {
	return (
		<button onClick={() => onDelete(post.id)}>
			Видалити
		</button>
	)
}