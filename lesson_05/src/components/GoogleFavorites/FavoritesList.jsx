import FavoriteCard from './FavoriteCard';
function FavoritesList({ favorites }) {
	return (
		<div>
			{
				favorites.map(item => (
					<FavoriteCard
						key={item.id}
						{...item}
					/>
				))
			}
		</div>
	);
}

export default FavoritesList;