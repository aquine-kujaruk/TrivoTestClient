import {createStackNavigator} from 'react-navigation-stack';
import AccountScreen from '../screens/Account/AccountScreen';
import LoginScreen from '../screens/Account/Login';
import RegisterScreen from '../screens/Account/Register';

const AccountScreenStacks = createStackNavigator({
	Account: {
		screen: AccountScreen,
		navigationOptions: () => ({
			title: 'Cuenta'
		})
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: () => ({
			title: 'Login'
		})
	},
	Register: {
		screen: RegisterScreen,
		navigationOptions: () => ({
			title: 'Registro'
		})
	}
});

export default AccountScreenStacks;
