import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';

import { createAppContainer } from 'react-navigation';
import RootNavigator from './src/react/navigation';

const AppContainer = createAppContainer(RootNavigator);

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
      'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf')
    });

    this.setState({assetsLoaded: true})
  }

  render(){
    return (
      <View style={{flex: 1}}>
        {
          this.state.assetsLoaded && <AppContainer />
        }
      </View>
    );
  }
}
