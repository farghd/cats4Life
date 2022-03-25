import { RiShoppingCart2Fill } from "react-icons/ri";


const Tile = ({ image, name, age, pedigree, gender, breed, city, price, addToBasket, id }) => {
	const onClick = () => {
		addToBasket({ id, name, price, image });
	};
	return (
		<div className="tile">
			<div className="tile-left-side">
				<img src={image} alt="" />
				<button onClick={onClick}><RiShoppingCart2Fill className="tilebuttonicon"/></button>	
				</div>
			<div className="tile-side">
				<h4>{name}</h4>
				<h5>Breed: {breed}</h5>
				<h5>{age} year old {gender}</h5>
				<h5>from {city}</h5>
				<p>Cost £{price}</p>
				<p>Pedigree: {pedigree}</p>
			</div>

		</div>
	);
};

export default Tile;
