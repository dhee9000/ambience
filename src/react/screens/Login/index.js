import React, {Component} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class LOGIN extends React.Component{
    render(){
        return( 
                <View style = {styles.container}>
                    <TextInput
                        placeholder = "username or email"
                        
                        style = {styles.input}
                        returnKeyType = "next"
                    />
                    <TextInput
                        placeholder = "password"
                        returnKeyType = "go"
                        secureTextEntry
                        style = {styles.input}
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
