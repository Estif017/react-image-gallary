import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();
const ContextProvider = ({ children }) => {
	const [allPhotos, setAllPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const url =
		'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAllPhotos(data))
			.catch((err) => console.log('Error Occored', err));
	}, []);
	// console.log(allPhotos);
	function toggleFavorite(id) {
		const updatedArray = allPhotos.map((photo) => {
			if (photo.id === id) {
				return {
					...photo,
					isFavorite: !photo.isFavorite,
				};
			}
			return photo;
		});
		setAllPhotos(updatedArray);
	}
	const addToCart = (newArray) => {
		setCartItems((prevvItem) => [...prevvItem, newArray]);
	};

	function removeFromCart(id) {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	return (
		<div>
			<Context.Provider
				value={{
					allPhotos,
					toggleFavorite,
					addToCart,
					cartItems,
					removeFromCart,
				}}>
				{children}
			</Context.Provider>
		</div>
	);
};

export { ContextProvider, Context };
