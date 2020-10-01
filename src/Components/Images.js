import React, { useState } from 'react';

export const Images = ({ className, img }) => {
	const [hovered, setHovered] = useState(false);
	console.log(hovered);
	return (
		<div className={`${className} image-container`}>
			<img
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setHovered(false);
				}}
				src={`${img}`}
				className='image-grid'
				alt='img'
			/>
		</div>
	);
};
