import React, { useContext } from 'react';
import { Context } from '../Context';
import { Images } from '../Images';
import { getClass } from '../utils/getClass';

export const Cart = () => {
	const { cartItems } = useContext(Context);
	const allCartItems = cartItems.map((cart, i) => (
		<div className={`${getClass(i)} image-container`} key={cart.id}>
			<img
				style={{
					width: '100%',
					height: '100%',
				}}
				src={`${cart.url}`}
				className='image-grid'
				alt='img'
			/>
		</div>
	));
	return (
		<main className='cart-page'>
			<h1>Check out</h1>
			{allCartItems}
		</main>
	);
};
