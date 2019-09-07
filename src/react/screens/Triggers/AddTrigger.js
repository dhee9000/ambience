import React from 'react';
import { View, ScrollView } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import Colors from '../../../config/Colors';
import { Text, Heading } from '../../components/StyledComponents';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FlatList } from 'react-native-gesture-handler';

const testBuildings = [
    {
        id: 'buildingId1',
        nickname: 'Home',
        rooms: [
            'roomId1',
            'roomId2',
            'roomId3'
        ]
    },
    {
        id: 'buildingId1',
        nickname: 'Work',
        rooms: [
            'roomId1',
            'roomId2',
            'roomId3'
        ]
    },
    {
        id: 'buildingId1',
        nickname: 'Apartment',
        rooms: [
            'roomId1',
            'roomId2',
            'roomId3'
        ]
    }
]

const testRooms = [
    {
        id: 'roomId1',
        nickname: 'Bedroom',
        regions: [
            1,2,3,4,5,6
        ]
    },
    {
        id: 'roomId2',
        nickname: 'Living Room',
        regions: [
            1,2,3,4,5,6
        ]
    },
    {
        id: 'roomId3',
        nickname: 'Kitchen',
        regions: [
            1,2,3,4,5,6
        ]
    }
]

const testRegions = [
    {
        nickname: 'Desk',
    },
    {
        nickname: 'Bed'
    },
    {
        nickname: 'Shelf'
    },
]

const testActions = [
    {
        name: 'Control Desk Light',
        type: 'switch',
    },
    {
        name: 'Control Ceiling Fan',
        type: 'switch',
    },
    {
        name: 'Control Music',
        type: 'assistant',
    },
]


export default class AddTrigger extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1, padding: 16.0,}}>
                <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                    <View>
                        <Icon name={'delete'} size={32} onPress={this.props.dismiss} />
                    </View>
                    <View>
                        <Heading style={{marginLeft: 16.0}}>Add Trigger</Heading>
                    </View>
                </View>
                <ProgressSteps
                    activeStepIconBorderColor = {Colors.primaryDark}
                    progressBarColor={Colors.accent}
                    completedProgressBarColor={Colors.primaryDark}
                    labelColor={Colors.primaryDark}
                    activeLabelColor={Colors.primaryDark}
                    completedProgressBarColor={Colors.primaryDark}
                    completedStepIconColor={Colors.primaryDark}>
                    <ProgressStep label={'Choose Building'}>
                        <Text>Choose which building to create the trigger in:</Text>
                        <FlatList
                            data={testBuildings}
                            renderItem={({item}) => {
                                return(<BuildingListing building={item} />)
                            }}
                        />
                    </ProgressStep>
                    <ProgressStep label={'Choose Room'}>
                        <Text>Choose which room to create the trigger in:</Text>
                        <FlatList
                            data={testRooms}
                            renderItem={({item}) => {
                                return(<RoomListing room={item} />)
                            }}
                        />
                    </ProgressStep>

                    <ProgressStep label={'Choose Region'}>
                    <Text>Choose which region should activate the trigger:</Text>
                        <FlatList
                            data={testRegions}
                            renderItem={({item}) => {
                                return(<RegionListing region={item} />)
                            }}
                        />
                    </ProgressStep>

                    <ProgressStep label={'Choose Actions'}>
                        <Text>Choose which actions the trigger should fire:</Text>
                        <FlatList
                            data={testActions}
                            renderItem={({item}) => {
                                return(<ActionListing action={item} />)
                            }}
                        />
                    </ProgressStep>
                </ProgressSteps>
            </View>
        )
    }
}

const BuildingListing = props => {
    return (
        <Card>
            <Heading style={{fontSize: 24.0}}>{props.building.nickname}</Heading>
            <Text>{props.building.rooms ? props.building.rooms.length : 0} rooms in this building.</Text>
        </Card>
    );
}
const RoomListing = props => {
    return (
        <Card>
            <Heading style={{fontSize: 24.0}}>{props.room.nickname}</Heading>
            <Text>{props.room.regions ? props.room.regions.length : 0} regions in this room.</Text>
        </Card>
    );
}
const RegionListing = props => {
    return (
        <Card>
            <Heading style={{fontSize: 24.0}}>{props.region.nickname}</Heading>
        </Card>
    );
}
const ActionListing = props => {
    return (
        <Card>
            <Heading style={{fontSize: 24.0}}>{props.action.name}</Heading>
        </Card>
    );
}

const Card = props => {
    return(
        <View {...props} style={{backgroundColor: '#efefef', borderRadius: 16.0, padding: 8.0, margin: 8.0}}>
            {props.children}
        </View>
    )
}