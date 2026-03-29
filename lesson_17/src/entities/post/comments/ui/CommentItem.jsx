export function CommentItem({ comment, actions }) {
	return (
		<div
			style={{
				borderBottom: '1px solid #ddd',
				padding: '5px 0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<span>
				<b>{comment.authorName}</b>: {comment.text}
			</span>

			<div>
				{actions?.map((action, index) => (
					<span key={index}>{action}</span>
				))}
			</div>
		</div>
	)
}
