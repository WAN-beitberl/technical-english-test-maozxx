import React from 'react';
import './styles.css';
import ConnectFour from './ConnectFour.js';

export default function App() {
	return (
		<div className='App'>
			<h1>Connect Four Game</h1>
			<h2>With React</h2>
			<ConnectFour />
		</div>
	);
}
