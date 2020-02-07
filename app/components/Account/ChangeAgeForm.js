import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import * as firebase from 'firebase';
import {fetchUpdateUserAge} from '../../services/HttpService';

export default function ChangeAgeForm(props) {
	const {age, setIsVisibleModal, setReloadData, toastRef} = props;
	const [newAge, setNewAge] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const updateAge = () => {
		setError(null);

		if (!newAge) return setError('La edad del usuario no ha cambiado.');

		if (isNaN(newAge)) return setError(`${newAge} no es una edad válida`);

		if (newAge < 12 || newAge > 100)
			return setError(`La edad tiene que ser mayor a 12 años`);

		setIsLoading(true);
		fetchUpdateUserAge(newAge)
			.then(() => {
				setIsLoading(false);
				setReloadData(true);
				toastRef.current.show('Edad actualizada correctamente');
				setIsVisibleModal(false);
			})
			.catch(() => {
				setError('Error al actualizar la edad.');
				setIsLoading(false);
			});
	};

	return (
		<View style={styles.view}>
			<Input
				placeholder="Edad"
				containerStyle={styles.input}
				defaultValue={age && age}
				onChange={(e) => setNewAge(e.nativeEvent.text)}
				rightIcon={{
					type: 'material-community',
					name: 'calendar',
					color: '#c2c2c2'
				}}
				errorMessage={error}
			/>
			<Button
				title="Cambiar edad"
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={updateAge}
				loading={isLoading}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10
	},
	input: {
		marginBottom: 10
	},
	btnContainer: {
		marginTop: 20,
		width: '95%'
	},
	btn: {
		backgroundColor: '#4e92df'
	}
});
