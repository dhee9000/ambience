import React, {Component} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {Heading, Text} from '../../components/StyledComponents';
import Typefaces from '../../../config/Typefaces';
import Colors from '../../../config/Colors';

import * as firebase from 'firebase';
import '@firebase/firestore';
import firebaseConfig from '../../../config/Firebase';

//firebase.initializeApp(firebaseConfig);

export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
          email: '',
          password:'',
        };
    }
    render(){
        return( 
                <View style = {styles.container}>
                    <TextInput
                        placeholder = "username or email"
                        
                        style = {styles.input}
                        onChangeText={(text) => this.setState({email: text})}
                        value = {this.state.email}
                        returnKeyType = "next"
                    />
                    <TextInput
                        placeholder = "password"
                        returnKeyType = "go"
                        secureTextEntry
                        style = {styles.input}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({password: text})}
                    />

                    <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style={styles.buttonText} > LOGIN</Text>
                    </TouchableOpacity>
               
                
                <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style={styles.buttonText} > Don't have an account? Sign up</Text>
                    </TouchableOpacity>
                </View>  

);
    }
    }

    const styles = StyleSheet.create({

        container: {
            padding :20
        },
        input: {
            height: 50,
            marginBottom: 15,
            paddingHorizontal: 15
        },
        buttonContainer: {
            paddingVertical: 15 
        },
        buttonText: {
            textAlign: 'center',
            fontWeight: '600'
        }

            });
