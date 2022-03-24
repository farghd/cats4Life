// import { ShopCart } from './ShopCart';
// import { Link } from 'react-router-dom';

// const Navbar = ({ basketItems, removeItemFromBasket }) => {
// 	return (
// 		<div className="nav">
// 			<Link to="/">Purrfect Cats</Link>
// 			<div className="nav-cart">
// 				<ShopCart
// 					basketItems={basketItems}
// 					removeItemFromBasket={removeItemFromBasket}
// 				/>
// 				{basketItems.length === 0 ? '' : <span>{basketItems.length}</span>}
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;

import { RiMenuFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { RiMenu2Fill} from 'react-icons/ri';
import catLogo from "../images/catlogo.png"
import {MdOutlineContactSupport} from 'react-icons/md';
import {MdOutlineStoreMallDirectory} from 'react-icons/md';
import {VscAccount} from 'react-icons/vsc';
import { ShopCart } from './ShopCart';
import {RiAccountCircleFill} from 'react-icons/ri'

const Navbar = ({ basketItems, removeItemFromBasket }) => {
    return (
        <div className="nav">
            <div className='menu'>
            <RiMenuFill className='showmenu'></RiMenuFill>
            <RiMenu2Fill className='hiddenmenu'></RiMenu2Fill>

            </div>
            <Link to="/"></Link>
            <div className='Logocontainer'>
            <img  className="Logo" src={catLogo} alt="" />
            </div>
            <div className='contactcontainer'>
            <MdOutlineContactSupport className='contact'/>
            </div>
            <MdOutlineStoreMallDirectory className='store'/>
            <RiAccountCircleFill className='account'></RiAccountCircleFill>
            <div className="nav-cart">
                <ShopCart 
                    basketItems={basketItems}
                    removeItemFromBasket={removeItemFromBasket}
                />
                {basketItems.length === 0 ? '' : <span>{basketItems.length}</span>}
            </div>
        </div>
    );
};

export default Navbar;
