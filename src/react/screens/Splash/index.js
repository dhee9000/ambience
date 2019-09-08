import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import CommonStyles from '../../styles/CommonStyles.js';

import { Text, Heading } from '../../components/StyledComponents';

import firebase from 'firebase';
import '@firebase/firestore';

import { AsyncStorage } from 'react-native';

import * as Facebook from 'expo-facebook';
import * as facebookConfig from '../../../config/Facebook';

export default class Screen extends React.Component {

    async componentDidMount() {
        try {
            let value = await AsyncStorage.getItem('SIGNED_IN');
            if (value === 'TRUE') {
                let {
                    type,
                    token,
                    expires,
                    permissions,
                    declinedPermissions,
                } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.APP_ID, {});
                if (type === 'success') {
                    this.props.navigation.navigate('LoggedInNavigator');
                    const credential = firebase.auth.FacebookAuthProvider.credential(token);
                    await firebase.auth().signInWithCredential(credential).catch((error) => {
                        alert(error.message);
                    });
                }
                else {
                    this.props.navigation.navigate('Login');
                }
            }
            else {
                this.props.navigation.navigate('Login');
            }
        } catch (error) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <View style={CommonStyles.Container, { flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../../assets/icon.png')} style={{ width: 250, height: 250 }} />
                <Heading style={{ fontSize: 48.0 }}>Ambience</Heading>
                <ActivityIndicator />
            </View>
        )
    }
}