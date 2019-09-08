import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heading, Text } from '../../components/StyledComponents';
import Typefaces from '../../../config/Typefaces';
import Colors from '../../../config/Colors';

import { LinearGradient } from 'expo-linear-gradient';

import * as firebase from 'firebase';
import '@firebase/firestore';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', padding: 16.0 }}>
                <Image source={require('../../../../assets/icon.png')} style={{ height: 150, width: 150 }} />
                <LinearGradient
                    colors={['#F2994A', '#F2C94C']}
                    style={{ borderRadius: 16.0, padding: 24.0, alignSelf: 'stretch' }}>
                    <Heading style={{color: Colors.primary}}>Login</Heading>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={Colors.primary}
                        style={styles.input}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        returnKeyType="next"
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={Colors.primary}
                        returnKeyType="go"
                        secureTextEntry
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </LinearGradient>
                <View style={{alignSelf: 'stretch'}}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={async () => {
                        try{
                            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
                            this.props.navigation.navigate('LoggedInNavigator');
                        }
                        catch(error){
                            alert('Error Logging In');
                        }
                    }}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.buttonText} > Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    input: {
        height: 60,
        marginBottom: 15,
        paddingHorizontal: 15,
        color: Colors.primary
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

