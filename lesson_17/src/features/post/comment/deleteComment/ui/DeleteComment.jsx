import { selectAuthUser } from "@/features/auth";
import { useSelector } from "react-redux";
import { useDeleteCommentMutation } from "../model/deleteCommentApi";
import { roles } from "@/shared/config/roles";
import { useState } from "react";

function DeleteCommentButton({ comment }) {
	const [isDeleting, setIsDeleting] = useState(false)
	const [deleteComment] = useDeleteCommentMutation()

	const user = useSelector((state) => state.auth.user)
	const isAuthenticated = Boolean(user)

	if (!user) return null



	if (!isAuthenticated) return null

	return (
		<button onClick={() => deleteComment(comment.id)} disabled={isDeleting}>
			{isDeleting ? 'Видаляється…' : 'Видалити'}
		</button>
	);
}

export default DeleteCommentButton;