import {createStackNavigator} from 'react-navigation-stack';
import AddProductScreen from '../screens/AddProductScreen';

const AddProductScreenStacks = createStackNavigator({
	AddProduct: {
		screen: AddProductScreen,
		navigationOptions: () => ({
			title: 'Añadir'
		})
	}
});

export default AddProductScreenStacks;
