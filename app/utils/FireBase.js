import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAb2GfoV25Chtoae68NVxkBXeWZoSapJXY',
	authDomain: 'triviotest.firebaseapp.com',
	databaseURL: 'https://triviotest.firebaseio.com',
	projectId: 'triviotest',
	storageBucket: 'triviotest.appspot.com',
	messagingSenderId: '651724324622',
	appId: '1:651724324622:web:6e2c30bd47d091cd11615f'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
