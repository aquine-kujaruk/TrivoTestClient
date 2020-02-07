import {createStackNavigator} from 'react-navigation-stack';
import SearchProductScreen from '../screens/SearchProductsScreen';

const SearchProductScreenStacks = createStackNavigator({
	SearchProduct: {
		screen: SearchProductScreen,
		navigationOptions: () => ({
			title: 'Buscar'
		})
	}
});

export default SearchProductScreenStacks;
