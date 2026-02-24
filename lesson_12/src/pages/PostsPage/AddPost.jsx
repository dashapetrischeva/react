import { useId, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addPost } from '@/store/slices/postsThunk'
import styles from "./AddPost.module.css";
function AddPost() {
	const [newPost, setNewPost] = useState({
		authorId: "",
		title: "",
		body: ""
	});
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const authorId = useId()
	const titleId = useId()
	const bodyId = useId()
	function handleChange(e) {
		const { name, value } = e.target;
		setNewPost(prev => ({
			...prev,
			[name]: value
		}));
	}


	async function handleSubmit(e) {
		e.preventDefault();

		if (!newPost.authorId || !newPost.title || !newPost.body) {
			alert('Fill in all fields.');
			return;
		}

		try {
			await dispatch(addPost(newPost)).unwrap();
			navigate('/posts');
		} catch (error) {
			alert(error);
		}
	}
	return (
		<div className={styles.formContainer}>
			<h1 className={styles.formTitle}>Add Post</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={authorId}>Author:</label>
					</div>
					<div className={styles.fieldInput}>
						<input
							type="text"
							name="authorId"
							id={authorId}
							value={newPost.authorId}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={titleId}>Title: </label>
					</div>
					<div className={styles.fieldInput}>
						<input
							type="text"
							name="title"
							id={titleId}
							value={newPost.title}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={bodyId}>Text:</label>
					</div>
					<div className={styles.fieldInput}>
						<input
							type="text"
							name="body"
							id={bodyId}
							value={newPost.body}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className={styles.formButtons}>
					<button>Add</button>
				</div>
			</form>
		</div>
	);
}

export default AddPost;