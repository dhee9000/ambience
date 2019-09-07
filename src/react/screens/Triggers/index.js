import React from 'react';
import { View, ScrollView, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FloatingAction } from "react-native-floating-action";

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { Feather as Icon } from '@expo/vector-icons'

import AddTriggerView from './AddTrigger';

const testData = [
    {
        name: 'Test Trigger',
        sourceCamera: ''
    }
]

class EditProfile extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            addingTrigger: false,
        };
    }

    render(){
        return(
            <View style={{padding: 16.0, flex: 1}}>
                <FlatList
                    ListHeaderComponent={<Heading style={{margin: 32.0, marginLeft: 16.0}}>Your Triggers</Heading>}
                    data={testData}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => (<TriggerItem trigger={item} />)}
                />

                <FloatingAction
                    actions={[
                        {
                            text: "Add Trigger",
                            icon: <Icon name={'git-merge'} size={24} color={'#fff'} />,
                            name: "bt_language",
                            position: 1
                        },
                    ]}
                    floatingIcon={<Icon name={'git-merge'} size={24} color={'#fff'} />}
                    overrideWithAction
                    onPressItem={() => {
                        this.setState({addingTrigger: true})
                    }}
                />

                <Modal animationType={'slide'} visible={this.state.addingTrigger}>
                    <AddTriggerView dismiss={() => this.setState({addingTrigger: false,})}/>
                </Modal>
            </View>
        )
    }
}

const TriggerItem = props => {
    return(
        <View>

        </View>
    );
}

const mapStateToProps = state => ({
    // buildings: state.buildings.list,
    // status: state.building.status
})

const mapDispatchToProps = dispatch => ({
    refreshBuildings: dispatch({type: ActionTypes.BUILDINGS.FETCH_REQUESTED})
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);