import React, { useContext } from 'react';
import { Context } from '../Context';
import { Images } from '../Images';
import { getClass } from '../utils/getClass';

export const Photos = () => {
	const { allPhotos } = useContext(Context);
	const imageMap = allPhotos.map((photo, i) => (
		<Images key={photo.id} img={photo.url} className={getClass(i)} />
	));
	return <main className='photos'>{imageMap}</main>;
};
