export function EditPostButton({ post, onEdit }) {
	return <button onClick={() => onEdit(post)}>Редагувати</button>
}