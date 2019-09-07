import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import RootNavigator from './src/react/navigation';

const AppContainer = createAppContainer(RootNavigator);

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}
