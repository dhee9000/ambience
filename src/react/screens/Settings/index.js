import React from 'react';
import { View, ScrollView } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import Colors from '../../../config/Colors';

import firebase from 'firebase';

import {AsyncStorage} from 'react-native';

class EditProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{padding: 16.0}}>
                <ScrollView>
                    <Heading style={{margin: 32.0, marginLeft: 16.0}}>Settings</Heading>
                    <TouchableOpacity
                    style={{borderColor: Colors.accent, borderBottomWidth: 1.0, borderTopWidth: 1.0, paddingVertical: 8.0, paddingHorizontal: 16.0,
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
                    }}
                    onPress={async () => {
                        await firebase.auth().signOut();
                        await AsyncStorage.removeItem('SIGNED_IN');
                        this.props.navigation.navigate('Login');
                    }}>
                        <Icon name={'key'} size={32} />
                        <View style={{marginLeft: 16.0}}>
                            <Text style={{fontFamily: 'Cairo-Bold', fontSize: 24.0}}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    // buildings: state.buildings.list,
    // status: state.building.status
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);