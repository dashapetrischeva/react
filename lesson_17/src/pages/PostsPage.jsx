
import { selectAuthUser } from '@/features/auth'
import AddPostButton from '@/features/post/addPost/ui/AddPostButton'
import { PostList } from '@/widgets/postList/PostList'
import { roles } from "@/shared/config/roles"
import { useSelector } from 'react-redux'
export default function PostsPage() {
	const user = useSelector(selectAuthUser)
	return (
		<div>
			<h1>Оголошення</h1>
			{user?.role === roles.manager || user?.role === roles.admin ? (
				<AddPostButton />
			) : null}

			<PostList user={user} />
		</div>
	)
}
