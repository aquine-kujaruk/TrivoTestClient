import * as firebase from 'firebase';

export const reauthenticate = (password) => {
	const user = firebase.auth().currentUser;
	const credentials = firebase.auth.EmailAuthProvider.credential(
		user.email,
		password
	);
	return user.reauthenticateWithCredential(credentials);
};

export const getToken = async () => {
	return await firebase.auth().currentUser.getIdToken(true);
};
