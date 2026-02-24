function PaginationBlock({ page, totalPagesNumber, onPageSelect }) {
	const goPrev = () => {
		onPageSelect(page - 1)
	}
	const goNext = () => {
		onPageSelect(page + 1)
	}
	return (
		<div>
			{
				!!totalPagesNumber && (
					<>
						<button onClick={goPrev} disabled={page === 1}>Previous</button>
						{
							Array.from({ length: totalPagesNumber }).map((_, index) => (
								<button key={index} onClick={() => onPageSelect(index + 1)}
									style={{ fontWeight: index + 1 === page ? 'bold' : 'normal' }}
								>
									{index + 1}
								</button>
							))
						}
						<button onClick={goNext} disabled={page === totalPagesNumber}>Next</button>
					</>
				)
			}
		</div >
	);
}

export default PaginationBlock;