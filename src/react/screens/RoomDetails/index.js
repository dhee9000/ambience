import React from 'react';
import { View, ScrollView, } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialCommunityIcons, Feather as Icon } from '@expo/vector-icons'

import { Text, Heading } from '../../components/StyledComponents';
import { Transition } from 'react-navigation-fluid-transitions';

export default class RoomDetails extends React.Component{
    render(){
        let roomData = this.props.navigation.getParam('room', {nickname: 'Room'});
        return(
            <View style={{padding: 16.0, paddingTop: 32.0, flex: 1}}>
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <Transition shared={'icon' + roomData.nickname} >
                        <MaterialCommunityIcons name={'door'} size={48} />
                    </Transition>
                    <Transition shared={roomData.nickname}>
                        <Text style={{fontSize: 32.0}}>{roomData.nickname}</Text>
                    </Transition>
                </View>
            </View>
        )
    }
}