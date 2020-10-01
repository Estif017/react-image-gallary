import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();
const ContextProvider = ({ children }) => {
	const [allPhotos, setAllPhotos] = useState([]);
	const url =
		'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAllPhotos(data))
			.catch((err) => console.log('Error Occored', err));
	}, []);
	// console.log(allPhotos);
	return (
		<div>
			<Context.Provider value={{ allPhotos }}>{children}</Context.Provider>
		</div>
	);
};

export { ContextProvider, Context };
