import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import {Heading, Text} from '../../components/StyledComponents';
import Typefaces from '../../../config/Typefaces';
import Colors from '../../../config/Colors';

import * as firebase from 'firebase';
import '@firebase/firestore';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            gender: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <Heading>Create your Account</Heading>
                <Text>Enter your details to sign up for Ambience</Text>
                <TextInput
                    placeholder="Choose a Username"
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={text => this.setState({username: text})}
                    returnKeyType="next"

                />
                <TextInput
                    placeholder="First Name"
                    returnKeyType="next"
                    value={this.state.fname}
                    onChangeText={text => this.setState({fname: text})}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Last Name"
                    returnKeyType="next"
                    value={this.state.lname}
                    onChangeText={text => this.setState({lname: text})}
                    style={styles.input}
                />
               <TextInput
                    placeholder="Gender"
                    returnKeyType="next"
                    value={this.state.gender}
                    onChangeText={text => this.setState({gender: text})}
                    style={styles.input}
                />



                <TouchableOpacity style={styles.buttonContainer} onPress={async () => {
                     await firebase.firestore().collection('profiles').doc(firebase.auth().currentUser.uid).set({
                         fname: this.state.fname,
                         lname: this.state.lname,
                         gender: this.state.gender,
                         username: this.state.username
                     })
                    this.props.navigation.navigate('LoggedInNavigator')
                }}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>


                {/* <TouchableOpacity style={styles.buttonContainer}
                onPress={ () => {
                 this.props.navigation.navigate('Login')
                }}>
                    <Text style={styles.buttonText} > Already have an account? Login</Text>
                </TouchableOpacity> */}
            </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 20
    },
    input: {
        height: 60,
        marginBottom: 15,
        paddingHorizontal: 15
    },
    buttonContainer: {
        paddingVertical: 8,
        borderRadius: 24.0,
        borderColor: Colors.primary,
        borderWidth: 2.0,
        margin: 4.0,
    },
    buttonText: {
        fontFamily: Typefaces.Bold,
        color: Colors.primary,
        fontSize: 18.0,
        textAlign: 'center',
    }

});
