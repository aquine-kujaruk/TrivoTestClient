import {createStackNavigator} from 'react-navigation-stack';
import GraphScreen from '../screens/GraphScreen';

const GraphScreenStacks = createStackNavigator({
	Graph: {
		screen: GraphScreen,
		navigationOptions: () => ({
			title: 'Gráfica'
		})
	}
});

export default GraphScreenStacks;
