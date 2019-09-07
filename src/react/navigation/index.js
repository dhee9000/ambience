import React from 'react';

import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Feather as Icon, MaterialCommunityIcons as IconsMaterial } from '@expo/vector-icons'

import Colors from '../../config/Colors';

import Splash from '../screens/Splash';
import Buildings from '../screens/Buildings';
import EditProfile from '../screens/EditProfile';


const LoggedInNavigator = createMaterialBottomTabNavigator(
    {
        Buildings: {
            screen: Buildings,
            navigationOptions: {
                tabBarIcon: props => (<Icon name={'home'} size={24} color={props.tintColor} />)
            }
        },
        Profile: {
            screen: EditProfile,
            navigationOptions: {
                tabBarIcon: props => (<Icon name={'user'} size={24} color={props.tintColor} />)
            }
        }
    },
    {
        // shifting: true,
        activeTintColor: Colors.primaryDark,
        inactiveTintColor: Colors.primary,
        barStyle: {
            backgroundColor: Colors.accent,
        }
    }
);

export default RootNavigator = createSwitchNavigator(
    {
        Splash,
        LoggedInNavigator,
    },
    {
        initialRouteName: 'LoggedInNavigator'
    }
)