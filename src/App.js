import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Photos } from './Components/pages/Photos';
import { Cart } from './Components/pages/Cart';
function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Photos />
				</Route>
				<Route path='/cart'>
					<Cart />
				</Route>
			</Switch>
			<h1>Home Page</h1>
		</div>
	);
}

export default App;
