import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import CommonStyles from '../../styles/CommonStyles.js';

import { Text, Heading } from '../../components/StyledComponents';

export default class Screen extends React.Component{
    render(){
        return(
            <View style={CommonStyles.Container, {flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../../../assets/icon.png')} style={{width: 250, height: 250}} />
                <Heading style={{fontSize: 48.0}}>Ambience</Heading>
                <ActivityIndicator />
            </View>
        )
    }
}