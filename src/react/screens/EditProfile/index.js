import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import * as ActionTypes from '../../../redux/ActionTypes';
import { connect } from 'react-redux';

import { Heading, Text } from '../../components/StyledComponents';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import Colors from '../../../config/Colors';

import firebase from 'firebase';
import '@firebase/firestore';

const testData = [
    {
        name: 'Test profile',
        actions: [
            {
                id: 'testAction',
                name: 'Jason',
                testParam: 'testParam'
            },
            {
                id: 'otherAcction',
                name: 'Ayush',
                type: 'air'

            },

            {
                id: 'moreAction',
                name: 'Guna',
                type: 'music'

            }
        ]
    }
]
class EditProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: false,
        }
    }

    async componentDidMount() {
        let profileSnapshot = await firebase.firestore().collection('profiles').doc(firebase.auth().currentUser.uid).get();
        let profileData = await profileSnapshot.data();
        this.setState({ profile: profileData })
    }

    render() {
        return (
            <View style={{ padding: 16.0 }}>
                <ScrollView>
                    <Heading style={{ margin: 32.0, marginLeft: 16.0 }}>Your Profile</Heading>
                    <Image style={styles.avatar} source={{uri: 'https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg'}} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            {this.state.profile ?
                                <Text numberOfLines={1} style={styles.name}>{this.state.profile.fname} {this.state.profile.lname}</Text> :
                                <ActivityIndicator />
                            }
                            {/* <Text style={styles.info}>UX Designer / Mobile developer</Text> */}
                            {/* <Text style={styles.description}>I'm a CS boy</Text> */}
                            <TouchableOpacity>
                                <Text>View Activity Log</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#efefef",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 4,
        borderColor: Colors.primary,
        margin: 16,
        alignSelf: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    name: {
        fontSize: 32,
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        marginTop: 10
    },
    description: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginVertical: 16,
        borderRadius: 30,
        backgroundColor: Colors.primary,
    }
});

const mapStateToProps = state => ({
    // buildings: state.buildings.list,
    // status: state.building.status
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);