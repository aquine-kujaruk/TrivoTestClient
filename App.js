import React from 'react';
import Navigation from './app/navigations/Navigation';
import {firebaseApp} from './app/utils/FireBase';

console.disableYellowBox = true;

export default function App() {
	return <Navigation />;
}
