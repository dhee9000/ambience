import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { FlatList, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { MaterialCommunityIcons, Feather as Icon } from '@expo/vector-icons'

import { Transition } from 'react-navigation-fluid-transitions';

import { FloatingAction } from "react-native-floating-action";
import BottomSheet from "react-native-raw-bottom-sheet";
import Typefaces from '../../../config/Typefaces';
import Colors from '../../../config/Colors';

import firebase from 'firebase';
import '@firebase/firestore';

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

        this.state={
            newBuildingName: '',
        }
    }

    componentDidMount(){
        this.props.fetchBuildings();
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <FlatList
                    ListHeaderComponent={
                        <Transition disappear='left' appear='right'>
                            <Heading style={{margin: 32.0, marginLeft: 16.0}}>Your Ambience</Heading>
                        </Transition>
                    }
                    ListEmptyComponent={<Text style={{alignSelf: 'center'}}>No Buildings Added.</Text>}
                    data={this.props.buildings}
                    renderItem={({item}) => {
                        return(
                            <BuildingListing building={item} navigation={this.props.navigation} />
                        )
                    }}
                    onRefresh={() => this.props.fetchBuildings()}
                    refreshing={this.state.refreshing}
                    keyExtractor={item => (item.nickname)}
                    style={{padding: 16.0}}
                />
                <FloatingAction
                    actions={[
                        {
                            text: "Add Trigger",
                            icon: <Icon name={'plus'} size={24} color={'#fff'} />,
                            name: "bt_language",
                            position: 1
                        },
                    ]}
                    floatingIcon={<Icon name={'plus'} size={24} color={'#fff'} />}
                    overrideWithAction
                    onPressItem={() => {
                        this.BottomSheet.open()
                    }}
                />
                <BottomSheet
                    ref={ref => {
                        this.BottomSheet = ref;
                    }}
                    height={200}
                    duration={250}
                    closeOnDragDown
                >
                    <View style={{flex: 1, padding: 16.0, justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: Typefaces.Bold, fontSize: 24.0}}>Add A New Building</Text>
                        <TextInput
                            ref={ref => {
                                this.BuildingNameInput = ref
                            }}
                            style={{color: Colors.primary}}
                            placeholder={'Enter the Name of the Building...'}
                            onChangeText = {text => this.setState({newBuildingName: text})}
                            value={this.state.newBuildingName}
                        />
                        <Button title={'Add'} disabled={this.state.newBuildingName.length < 2} onPress={() => {
                            firebase.firestore().collection('buildings').doc().set({
                                nickname: this.state.newBuildingName,
                                owner: firebase.auth().currentUser.uid,
                                members: [
                                    firebase.auth().currentUser.uid
                                ]
                            }).then(() => {
                                this.props.fetchBuildings();
                                this.BottomSheet.close();
                            });
                        }}/>
                    </View>
                </BottomSheet>
            </View>
        )
    }
}

const BuildingListing = props => {
    return(
        <TouchableOpacity onPress={() => props.navigation.navigate('Rooms', {building: props.building})}>
            <View style={{borderRadius: 8.0, backgroundColor: '#efefef', margin: 4.0, padding: 16.0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons name={'home-modern'} size={48} style={{flex: 1}} />
                <View style={{flex: 4}}>
                    <Transition shared={props.building.nickname}>
                        <Text numberOfLines={1} style={{fontSize: 32.0}}>{props.building.nickname}</Text>
                    </Transition>
                    <Text>{props.building.members.length} People</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const mapStateToProps = state => ({
    buildings: state.buildings
})

const mapDispatchToProps = dispatch => ({
    fetchBuildings: () => dispatch({type: ActionTypes.BUILDINGS.REQUESTED})
})

export default connect(mapStateToProps, mapDispatchToProps)(Buildings);