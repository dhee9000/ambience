import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, } from 'react-native';

export default class RegForm extends React.Component 
{
    constructor(props){
        super(props);
    }
  render()
    {
        return (
                <View style={styles.regform}>
                    <Text style ={styles.header}>Register Room </Text>

                    <TextInput style = {styles.TextInput} placeholder="Room Name" />
					<TouchableOpacity style = {styles.button}>
						<Text style = {styles.btmtext}>Add Room</Text>
					</TouchableOpacity>
                </View>
            );
    }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',

  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  TextInput: {
	  alignSelf: 'stretch',
	  height: 40,
	  marginBottom: 30,
	 
	  borderBottomWidth: 1,
  },
  button:
  {
	  alignSelf: 'stretch',
	  alignItems: 'center',
	  padding: 20,
	  backgroundColor: '#59cbbd',
	  marginTop: 30,
  },
  btmtext: {
	  color: '#fff',
	  fontWeight: 'bold',
  }
});
