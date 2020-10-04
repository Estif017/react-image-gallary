import React, { useState, useContext } from 'react';
import { Context } from './Context';
import PropTypes from 'prop-types';

export const Images = ({ className, img, id }) => {
	const { toggleFavorite, addToCart } = useContext(Context);
	const [hovered, setHovered] = useState(false);
	const heartIcon = hovered && (
		<i
			onClick={() => {
				toggleFavorite(img.id);
			}}
			className={
				!img.isFavorite ? `ri-heart-line favorite` : `ri-heart-fill favorite`
			}></i>
	);
	const cartIcon = hovered && (
		<i onClick={() => addToCart(img)} className='ri-add-circle-line cart'></i>
	);
	return (
		<div
			className={`${className} image-container`}
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
			}}>
			<img src={`${img.url}`} className='image-grid' alt='img' />
			{heartIcon}
			{cartIcon}
		</div>
	);
};
Images.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool.isRequired,
	}),
};
