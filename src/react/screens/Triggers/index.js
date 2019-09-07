import React from 'react';
import { View, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'


class EditProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{padding: 16.0}}>
                <ScrollView>
                    <Heading style={{margin: 32.0, marginLeft: 16.0}}>Your Triggers</Heading>
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
    refreshBuildings: dispatch({type: ActionTypes.BUILDINGS.FETCH_REQUESTED})
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);