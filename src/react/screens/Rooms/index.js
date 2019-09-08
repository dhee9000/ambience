import React from 'react';
import { View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, Feather as Icon } from '@expo/vector-icons'
import { Heading, Text } from '../../components/StyledComponents';

import { FloatingAction } from "react-native-floating-action";
import BottomSheet from "react-native-raw-bottom-sheet";

import { Transition } from 'react-navigation-fluid-transitions';

import { connect } from 'react-redux';

const testData = [
    {
        'nickname': 'Room A'
    },
    {
        'nickname': 'Room B'
    },
    {
        'nickname': 'Room C'
    },
]

class Rooms extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newRoomName: '',
        }
    }

    render() {

        let buildingDetails = this.props.navigation.getParam('building', {nickname: 'Building'})
        return (
            <View style={{ flex: 1, padding: 16.0 }}>
                <FlatList
                    ListHeaderComponent={
                        <View>
                            <Heading style={{ margin: 32.0, marginBottom: 0, marginLeft: 16.0 }}>Rooms</Heading>
                            <Transition shared={buildingDetails.nickname}>
                                <Text style={{marginLeft: 16.0, marginBottom: 16.0, fontSize: 32.0}}>{buildingDetails.nickname}</Text>
                            </Transition>
                        </View>
                    }
                    data={testData}
                    renderItem={({ item }) => {
                        return (
                            <RoomListing room={item} navigation={this.props.navigation} />
                        )
                    }}
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
                    <View style={{ flex: 1, padding: 16.0, justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Typefaces.Bold, fontSize: 24.0 }}>Add A New Room</Text>
                        <TextInput
                            ref={ref => {
                                this.RoomNameInput = ref
                            }}
                            style={{ color: Colors.primary }}
                            placeholder={'Enter the Name of the Room...'}
                            onChangeText={text => this.setState({ newRoomName: text })}
                            value={this.state.newRoomName}
                        />
                        <Button title={'Add'} disabled={this.state.newRoomName.length < 2} />
                    </View>
                </BottomSheet>
            </View>
        )
    }
}

const RoomListing = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('RoomDetails', {room: props.room})}>
                <View style={{ borderRadius: 8.0, backgroundColor: '#efefef', margin: 4.0, padding: 16.0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Transition shared={'icon' + props.room.nickname}>
                        <MaterialCommunityIcons name={'door'} size={48} style={{ flex: 1 }} />
                    </Transition>
                    <View style={{ flex: 4 }}>
                        <Transition shared={props.room.nickname}>
                            <Text numberOfLines={1} style={{ fontSize: 32.0 }}>{props.room.nickname}</Text>
                        </Transition>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);