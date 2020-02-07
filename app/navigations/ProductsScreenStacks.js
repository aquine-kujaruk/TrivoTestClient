import {createStackNavigator} from 'react-navigation-stack';
import ProductsScreen from '../screens/ProductsScreen';

const ProductsScreenStacks = createStackNavigator({
	Products: {
		screen: ProductsScreen,
		navigationOptions: () => ({
			title: 'Productos'
		})
	}
});

export default ProductsScreenStacks;
