import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Rooms extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <FlatList
                    data={this.props.rooms}
                    renderItem={({item}) => {
                        return(
                            <RoomListing room={item} />
                        )
                    }}
                />
            </View>
        )
    }
}

const RoomListing = props => {
    return(
        <View>
            <Heading>{props.nickname}</Heading>
            <Text>{props.members.length} People</Text>
        </View>
    )
}