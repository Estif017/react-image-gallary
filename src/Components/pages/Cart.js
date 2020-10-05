import React, { useContext, useState } from 'react';
import { Context } from '../Context';

export const Cart = () => {
	const { cartItems, removeFromCart, empityCart } = useContext(Context);
	const [buttonText, setButtonText] = useState('Place Order');
	console.log(buttonText);
	let price = 5.99;
	let total = 0;
	const allCartItems = cartItems.map((cart, i) => (
		<div className='cart-item' key={cart.id}>
			<i
				onMouseEnter={(e) => {
					// setHovered(true);
					e.target.className = 'ri-delete-bin-fill';
					console.log(e.target.className);
				}}
				onMouseLeave={(e) => {
					e.target.className = 'ri-delete-bin-line';
				}}
				onClick={() => {
					removeFromCart(cart.id);
				}}
				className='ri-delete-bin-line'></i>
			<img src={cart.url} width='130px' alt='img' />
			<p>${price}</p>
		</div>
	));
	cartItems.forEach((item) => {
		total = total + price;
	});
	function placeOrder() {
		setButtonText('Ordering...');
		setTimeout(() => {
			console.log('Order placed!');
			setButtonText('Place Order');
			// empty the cart
			empityCart();
		}, 3000);
	}
	return (
		<main className='cart-page'>
			<h1>Check out</h1>
			{allCartItems}
			<p className='total-cost'>
				Total:
				{total.toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}{' '}
			</p>
			<div className='order-button'>
				<button
					onClick={placeOrder}
					disabled={cartItems.length > 0 ? false : true}>
					{buttonText}
				</button>
			</div>
		</main>
	);
};
