import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    TextInput, Button,TouchableOpacity
} from 'react-native';

import styles, { pink } from '../styles/style'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.maincontainer}>
                    <ScrollView>
                        <View style={styles.container}>
                            <Text style={login.loginText}>Sign In</Text>

                            <View>
                                <Text style={styles.input_label}>Email ID</Text>
                                <TextInput style={styles.text_input} placeholder="info@vooeats.com" placeholderTextColor='#ccc' />
                            </View>
                            <View>
                                <Text style={styles.input_label}>Password</Text>
                                <TextInput style={styles.text_input} placeholder="**********" />
                            </View>
                            <TouchableOpacity>
                                <Text style={login.forgot}>Forgot Password ?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('dashboard')}
                                style={{ backgroundColor: pink, borderRadius: 4, marginTop: 30, }}>
                                <Text style={login.signin}>sign in</Text>
                            </TouchableOpacity>

                            <Text style={login.or}>or</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: '10%' }}>
                                <Text>Not yet a member,</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
                                    <Text style={{ color: pink }}> Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    };

}

const login = StyleSheet.create({
    loginText: {
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: '10%'
    },
    forgot: {
        textAlign: 'right',
        fontWeight: '600',
        marginTop: 10
    },
    signin: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
        textTransform: 'capitalize',
    },
    or: {
        fontSize: 30,
        color: '#aaa',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Login
