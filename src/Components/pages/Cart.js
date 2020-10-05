import React, { useContext } from 'react';
import { Context } from '../Context';
// // import { Images } from '../Images';
// import { getClass } from '../utils/getClass';

export const Cart = () => {
	const { cartItems, removeFromCart } = useContext(Context);
	const allCartItems = cartItems.map((cart, i) => (
		<div className='cart-item' key={cart.id}>
			<i
				onClick={() => {
					removeFromCart(cart.id);
				}}
				className='ri-delete-bin-line'></i>
			<img src={cart.url} width='130px' alt='img' />
			<p>$5.99</p>
		</div>
	));
	return (
		<main className='cart-page'>
			<h1>Check out</h1>
			{allCartItems}
			<p className='total-cost'>Total: </p>
			<div className='order-button'>
				<button>Place Order</button>
			</div>
		</main>
	);
};
