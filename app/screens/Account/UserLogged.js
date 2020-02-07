import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import * as firebase from 'firebase';
import InfoUser from '../../components/Account/InfoUser';
import Toast from 'react-native-easy-toast';
import Loading from '../../components/Loading';
import AccountOptions from '../../components/Account/AccountOptions';
import {fetchGetUser} from '../../services/HttpService';

export default function UserLogged() {
	const [userInfo, setUserInfo] = useState({});
	const [age, setAge] = useState(null);
	const [reloadData, setReloadData] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [textLoading, setTextLoading] = useState('');
	const toastRef = useRef();

	useEffect(() => {
		(async () => {
			const user = await firebase.auth().currentUser;
			const userBackend = await fetchGetUser();

			setUserInfo(user.providerData[0]);
			setAge(userBackend.age || null);
		})();
		setReloadData(false);
	}, [reloadData]);

	return (
		<View style={styles.viewUserInfo}>
			<InfoUser
				userInfo={userInfo}
				age={age}
				setReloadData={setReloadData}
				toastRef={toastRef}
				setIsLoading={setIsLoading}
				setTextLoading={setTextLoading}
			/>
			<AccountOptions
				userInfo={userInfo}
				age={age}
				setReloadData={setReloadData}
				toastRef={toastRef}
			/>

			<Button
				title="Cerrar sesión"
				buttonStyle={styles.btnCloseSession}
				titleStyle={styles.btnCloseSessionText}
				onPress={() => firebase.auth().signOut()}
			/>

			<Toast ref={toastRef} position="center" opacity={0.5} />
			<Loading text={textLoading} isVisible={isLoading} />
		</View>
	);
}

const styles = StyleSheet.create({
	viewUserInfo: {
		minHeight: '100%',
		backgroundColor: '#f2f2f2'
	},
	btnCloseSession: {
		marginTop: 30,
		borderRadius: 0,
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderTopColor: '#e3e3e3',
		borderBottomWidth: 1,
		borderBottomColor: '#e3e3e3',
		paddingTop: 10,
		paddingBottom: 10
	},
	btnCloseSessionText: {
		color: '#4e92df'
	}
});
