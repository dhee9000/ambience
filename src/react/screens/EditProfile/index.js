import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'


const testData = [
    {
        name: 'Test profile',
        actions: [
            {
                id: 'testAction',
                name: 'Jason',
                testParam: 'testParam'
            },
            {
                id: 'otherAcction',
                name: 'Ayush',
                type: 'air'

            },

            {
                id: 'moreAction',
                name: 'Guna',
                type: 'music'

            }
        ]
    }
]
class EditProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{padding: 16.0}}>
                <ScrollView>
                    <Heading style={{margin: 32.0, marginLeft: 16.0}}>Your Profile</Heading>
                </ScrollView>
                <View style = {styles.container}></View>
                    <View style = {styles.header}></View>
                        <Image style = {styles.avatar}></Image>
                        <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Ayush</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>I'm a CS boy</Text>
                   
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Friends</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Favorites</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>

                        
                    
               
          
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#efefef",
        height:200,
    },
    avatar:{
          
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:300
    },
    name: {
        fontSize: 22,
        
        fontWeight: '600',


    },
    body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
       
        fontWeight: "600"
      },
      info:{
        fontSize:16,
       
        marginTop:10
      },
      description:{
        fontSize:16,
        
        marginTop:20,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",


}
});

const mapStateToProps = state => ({
    // buildings: state.buildings.list,
    // status: state.building.status
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);