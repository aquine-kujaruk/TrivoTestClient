import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ProductsScreenStacks from './ProductsScreenStacks';
import SearchProductScreenStacks from './SearchProductScreenStacks';
import AddProductScreenStacks from './AddProductScreenStacks';
import GraphScreenStacks from './GraphScreenStacks';
import AccountScreenStacks from './AccountScreenStacks';
import {Icon} from 'react-native-elements';
import React from 'react';
import {View} from 'react-native';

const NavigationStacks = createBottomTabNavigator(
	{
		Products: {
			screen: ProductsScreenStacks,
			navigationOptions: () => ({
				tabBarLabel: <View />,
				tabBarIcon: ({tintColor}) => (
					<Icon type="material-community" name="home" color={tintColor} />
				)
			})
		},

		SearchProduct: {
			screen: SearchProductScreenStacks,
			navigationOptions: () => ({
				tabBarLabel: <View />,
				tabBarIcon: ({tintColor}) => (
					<Icon type="material-community" name="magnify" color={tintColor} />
				)
			})
		},

		AddProduct: {
			screen: AddProductScreenStacks,
			navigationOptions: () => ({
				tabBarLabel: <View />,
				tabBarIcon: ({tintColor}) => (
					<Icon type="material-community" name="plus" color={tintColor} />
				)
			})
		},

		Graph: {
			screen: GraphScreenStacks,
			navigationOptions: () => ({
				tabBarLabel: <View />,
				tabBarIcon: ({tintColor}) => (
					<Icon type="material-community" name="poll" color={tintColor} />
				)
			})
		},

		Account: {
			screen: AccountScreenStacks,
			navigationOptions: () => ({
				tabBarLabel: <View />,
				tabBarIcon: ({tintColor}) => (
					<Icon type="material-community" name="account" color={tintColor} />
				)
			})
		}
	},
	{
		tabBarOptions: {
			activeTintColor: '#4e92df'
		}
	}
);

export default createAppContainer(NavigationStacks);
