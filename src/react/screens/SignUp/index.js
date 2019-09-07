import React, {Component} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class SignUp extends React.Component{
    render(){
        return( 
            
                <View style = {styles.container}>
                    <TextInput
                        placeholder = "Enter your email"
                        
                        style = {styles.input}
                        returnKeyType = "next"
                    />
                    <TextInput
                        placeholder = "Choose a username"
                        style = {styles.input}
                        returnKeyType = "next"
                        
                    />
                     <TextInput
                        placeholder = "Choose a password"
                        returnKeyType = "next"
                        secureTextEntry
                        style = {styles.input}
                    />
                     <TextInput
                        placeholder = "Enter you password again"
                        returnKeyType = "next"
                        secureTextEntry
                        style = {styles.input}
                    />
                         <TextInput
                        placeholder = "First Name"
                        returnKeyType = "next"
                        
                        style = {styles.input}
                        />
                        <TextInput
                        placeholder = "Last Name"
                        returnKeyType = "next"
                        
                        style = {styles.input}
                        />
                        <TextInput
                        placeholder = "Gender"
                        returnKeyType = "next"
                       
                        style = {styles.input}
                        />
                        


                    <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style={styles.buttonText} > Create your account</Text>
                    </TouchableOpacity>
               
                
                <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style={styles.buttonText} > Already have an account? Login</Text>
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
            height: 60,
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
