import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Picker, ScrollView } from 'react-native';

import {Heading, Text} from '../../components/StyledComponents';
import Typefaces from '../../../config/Typefaces';
import Colors from '../../../config/Colors';

import * as firebase from 'firebase';
import '@firebase/firestore';
import firebaseConfig from '../../../config/Firebase';

firebase.initializeApp(firebaseConfig);

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            gender: 'Male',
        };
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <Heading>Create your Account</Heading>
                <Text>Enter your details to sign up for Ambience</Text>
                <TextInput
                    placeholder="Enter your Email"
                    style={styles.input}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="Choose a Username"
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={text => this.setState({username: text})}
                    returnKeyType="next"

                />
                <TextInput
                    placeholder="Choose a Password"
                    returnKeyType="next"
                    secureTextEntry
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}
                />
                <TextInput
                    placeholder="Enter Password Again"
                    returnKeyType="next"
                    secureTextEntry
                    style={styles.input}
                    value={this.state.confirmation}
                    onChangeText={text => this.setState({confirmation: text})}
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
                <Text>Choose a Gender:</Text>
                <Picker
                    selectedValue={this.state.gender}
                    style={{height: 50, width: 250, alignSelf: 'center'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({gender: itemValue})
                    }>
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="SJW" value="SJW" />
                </Picker>



                <TouchableOpacity style={styles.buttonContainer} onPress={async () => {
                    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
                    await firebase.firestore().collection('profiles').doc(firebase.auth().currentUser.uid).set({
                        fname: this.state.fname,
                        lname: this.state.lname,
                        gender: this.state.gender,
                        username: this.state.username
                    })
                }}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} > Already have an account? Login</Text>
                </TouchableOpacity>
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
