import { RiShoppingCartLine } from 'react-icons/ri';
import { BsCartX } from 'react-icons/bs';
import { useState } from 'react';
import {VscChromeClose} from 'react-icons/vsc';

export const ShopCart = ({ basketItems, removeItemFromBasket, image }) => {
	const [open, setOpen] = useState(false);

	const basketTotal = basketItems.reduce((accumulator, currentItem) => {
		accumulator += parseFloat(currentItem.price);
		return accumulator;
	}, 0);

	return (
		<>
			<div
				onClick={() => {
					setOpen(false);
				}}
				className={`overlay ${open ? 'overlay--open' : ''}`}></div>
			<div class={`modal ${open ? 'modal--open' : ''}`}>
				<button
					onClick={() => {
						setOpen(false);
					}}
					className="close-button">
					<VscChromeClose />
				</button>
				<h3>Your Cart</h3>
				<div className='basket-list'>
				{basketItems.map((item) => (
					<div className="container">
						<img src={item.image} alt="" />
						<div className="container-side">						
						<h2>{item.name}</h2>
						<p>£{item.price}</p>
						<button className="remove">
							<BsCartX
								onClick={() => {
									removeItemFromBasket(item);
								}}
							/>
						</button>
						</div>
					</div>
				))}
				</div>
				<h4 className="total"> Total Cost: £{basketTotal.toFixed(2)}</h4>


			</div>

			<button
				onClick={() => {
					setOpen(true);
				}}
				className="shop-button">
				<ul>
					<li>
						<RiShoppingCartLine />
					</li>
				</ul>
			</button>
		</>
	);
};

export default ShopCart;
