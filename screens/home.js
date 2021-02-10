/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    StatusBar,
    Text, ImageBackground, Dimensions, TouchableOpacity
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// const Imageheight = windowWidth / 1.5;

function Home({ navigation }) {
    return (
        <>
            <StatusBar hidden />
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <ImageBackground
                            style={styles.tinyLogo}
                            source={require('../assets/splash.png')}>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                                    <View>
                                        <Image
                                            style={{ width: windowWidth, height: windowWidth }}
                                            source={require('../assets/logo.png')} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        height: windowHeight,
        justifyContent: 'center',
        width: windowWidth
    },
    logocaption: {
        fontSize: 18,
        color: "#c91e06",
        fontWeight: "600"
    }
});

export default Home;
