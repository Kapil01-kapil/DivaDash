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

class Rating extends React.Component {
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
                            <Text style={login.loginText}>Rating</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    };

}

const login = StyleSheet.create({
    
});

export default Rating
