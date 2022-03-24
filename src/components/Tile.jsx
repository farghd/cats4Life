

const Tile = ({ image, name, age, pedigree, gender, breed, city, price, addToBasket, id }) => {
	const onClick = () => {
		addToBasket({ id, name, price, image });
	};
	return (
		<div className="tile">
			<img src={image} alt="" />
			<button onClick={onClick}>Add to Cart</button>
			
			<div className="tile-side">
			<h4>{name}</h4>
			<h5>Breed: {breed}</h5>
			<h5>{age} year old {gender}</h5>
			<h5>Place of birth: {city}</h5>
			<p>Cost £{price}</p>
			<p>Pedigree: {pedigree}</p>
			{/* <button onClick={onClick}>Add to Cart</button> */}
			</div>
		</div>
	);
};

export default Tile;
