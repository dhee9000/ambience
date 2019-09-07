import React from 'react';
import { View, ScrollView, } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

const testData = [
    {
        nickname: 'Test Building',
        members: [
            1,2,3,4,5,6
        ]
    },
    {
        nickname: 'Office Building',
        members: [
            1,2,3,4,5,6
        ]
    },
    {
        nickname: 'Other Building',
        members: [
            1,2,3,4,5,6
        ]
    },
    {
        nickname: 'Work Building',
        members: [
            1,2,3,4,5,6
        ]
    },
    {
        nickname: 'Home Building',
        members: [
            1,2,3,4,5,6
        ]
    },
    {
        nickname: 'Apartment Building',
        members: [
            1,2,3,4,5,6
        ]
    }
]

class Buildings extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <FlatList
                    ListHeaderComponent={<Heading style={{margin: 32.0, marginLeft: 16.0}}>Your Ambience</Heading>}
                    data={testData}
                    renderItem={({item}) => {
                        return(
                            <BuildingListing building={item} />
                        )
                    }}
                    keyExtractor={item => (item.nickname)}
                    style={{padding: 16.0}}
                />
            </View>
        )
    }
}

const BuildingListing = props => {
    return(
        <TouchableOpacity>
            <View style={{borderRadius: 8.0, backgroundColor: '#efefef', margin: 4.0, padding: 16.0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={'home-modern'} size={48} style={{flex: 1}} />
                <View style={{flex: 4}}>
                    <Text numberOfLines={1} style={{fontSize: 32.0}}>{props.building.nickname}</Text>
                    <Text>{props.building.members.length} People</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const mapStateToProps = state => ({
    // buildings: state.buildings.list,
    // status: state.building.status
})

const mapDispatchToProps = dispatch => ({
    refreshBuildings: dispatch({type: ActionTypes.BUILDINGS.FETCH_REQUESTED})
})

export default connect(mapStateToProps, mapDispatchToProps)(Buildings);