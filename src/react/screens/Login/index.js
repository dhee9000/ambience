import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heading, Text } from '../../components/StyledComponents';
import Typefaces from '../../../config/Typefaces';
import Colors from '../../../config/Colors';

import { LinearGradient } from 'expo-linear-gradient';

import { AsyncStorage } from 'react-native';

import * as firebase from 'firebase';
import '@firebase/firestore';

import * as Facebook from 'expo-facebook';
import * as facebookConfig from '../../../config/Facebook';

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
                <Heading>Ambience uses Facebook Login</Heading>
                <View style={{ alignSelf: 'stretch' }}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={async () => {
                        try {
                            let {
                                type,
                                token,
                                expires,
                                permissions,
                                declinedPermissions,
                            } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.APP_ID, {});

                            if (type === 'success') {
                                await AsyncStorage.setItem('SIGNED_IN', 'TRUE')
                                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                                firebase.auth().signInWithCredential(credential).catch((error) => {
                                    alert(error.message);
                                });
                                let profileSnapshot = await firebase.firestore().collection('profiles').doc(firebase.auth().currentUser.uid).get();
                                if (!profileSnapshot.exists) {
                                    this.props.navigation.navigate('SignUp');
                                }
                                else {
                                    this.props.navigation.navigate('LoggedInNavigator');
                                }
                            }
                            else {
                                alert('Can\'t log in at this time, please try again later!');
                            }
                        }
                        catch (error) {
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

