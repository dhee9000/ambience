import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import CommonStyles from '../../styles/CommonStyles.js';

import { Text, Heading } from '../../components/StyledComponents';

import firebase from 'firebase';
import '@firebase/firestore';

import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';

import * as facebookConfig from '../../../config/Facebook';

export default class Screen extends React.Component{

    signInAsync = async () => {
        try {
          await GoogleSignIn.askForPlayServicesAsync();
          const { type, user } = await GoogleSignIn.signInAsync();
          if (type === 'success') {
            this.props.navigation.navigate('LoggedInNavigator')
          }
        } catch ({ message }) {
          alert('login: Error:' + message);
        }
      };

    signOutAsync = async () => {
        try {
          await GoogleSignIn.signOutAsync();
          this.setState({ user: null });
        } catch ({ message }) {
          alert('signOutAsync: ' + message);
        }
      };

    async componentDidMount(){
        // try {
        //     await GoogleSignIn.initAsync({ clientId: '<YOUR_IOS_CLIENT_ID>' });
        // } catch ({ message }) {
        //     alert('GoogleSignIn.initAsync(): ' + message);
        // }

        let {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.APP_ID, {});

          if(type === 'success'){
              const credential = firebase.auth.FacebookAuthProvider.credential(token);
              firebase.auth().signInWithCredential(credential).catch((error) => {
                alert(error.message);
              });
              let profileSnapshot = await firebase.firestore().collection('profiles').doc(firebase.auth().currentUser.uid).get();
              if(!profileSnapshot.exists){
                  this.props.navigation.navigate('SignUp');
              }
              else{
                this.props.navigation.navigate('LoggedInNavigator');
              }
          }
          else{
              alert('Can\'t log in at this time, please try again later!');
          }

    }

    render(){
        return(
            <View style={CommonStyles.Container, {flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../../../assets/icon.png')} style={{width: 250, height: 250}} />
                <Heading style={{fontSize: 48.0}}>Ambience</Heading>
                <ActivityIndicator />
            </View>
        )
    }
}