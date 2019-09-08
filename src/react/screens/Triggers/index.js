import React from 'react';
import { View, ScrollView, Modal } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { FloatingAction } from "react-native-floating-action";

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { Feather as Icon } from '@expo/vector-icons'

import AddTriggerView from './AddTrigger';

const testData = [
    {
        name: 'Test Trigger',
        actions: [
            {
                id: 'testAction',
                name: 'Lights Off',
                testParam: 'testParam'
            },
            {
                id: 'otherAcction',
                name: 'Fan On',
                type: 'air'

            },

            {
                id: 'moreAction',
                name: 'Music On',
                type: 'music'

            }
        ]
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

         
           <View style={{borderRadius: 8.0, backgroundColor: '#efefef', margin: 4.0, padding: 16.0, justifyContent: 'center', alignItems: 'center'}}>
               <View style ={{flex: 4, flexDirection: 'row'}}>

                   <Text numberOfLines={1} style = {{fontSize: 32}}> {props.trigger.name}</Text>
                   <TouchableOpacity>
                   <Icon name={'edit'} size={32}/>
                
                   </TouchableOpacity>
                </View>
                <FlatList
                    data = {props.trigger.actions}
                    renderItem={({item}) => {
                        return(
                            <TriggerActionItem action={item} />
                        )
                    }}

                />

            </View>
           
    );
}

const TriggerActionItem = props=>{

    return(

    <View style={{ backgroundColor: '#efefef', padding: 16.0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style ={{ flexDirection: 'row'}}>
            <Text > {props.action.name}</Text>
         </View>
     </View>

);
}





const mapStateToProps = state => ({
    // buildings: state.buildings.list,
    // status: state.building.status
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
