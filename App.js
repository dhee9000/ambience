import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { Provider } from 'react-redux';
import setupReduxStore from './src/redux/store';

import * as Font from 'expo-font';

import { createAppContainer } from 'react-navigation';
import RootNavigator from './src/react/navigation';
const AppContainer = createAppContainer(RootNavigator);

const reduxStore = setupReduxStore();

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      assetsLoaded: false,
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Cairo': require('./assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf'),
      'Cairo-Light': require('./assets/fonts/Cairo-Light.ttf'),
      'Cairo-ExtraLight': require('./assets/fonts/Cairo-ExtraLight.ttf'),
      'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
    });

    this.setState({assetsLoaded: true})
  }

  render(){
    if(!this.state.assetsLoaded) return (<View><ActivityIndicator /></View>)
    return (
      <View style={{flex: 1}}>
        <Provider store={reduxStore}>
          <AppContainer />
        </Provider>
      </View>
    );
  }
}
