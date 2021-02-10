/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Alert,
    View,
    TouchableOpacity,
    Modal,
    Image,
    StatusBar,
    Text
} from 'react-native';
import MapView from 'react-native-maps';
import Card from '../Components/Card';
const Track = props => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView >
                <View style={{ flex: 1 }}>
                    {/* <MapView
                        showsMyLocationButton={true}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    /> */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={track.centeredView}>
                            <View style={track.modalView}>
                                <Text style={track.modalText}>Hello World!</Text>

                                <TouchableOpacity
                                    style={{ ...track.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={track.textStyle}>Hide Modal</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(true);
                            }} style={{ width: 30, height: 30, borderRadius: 30 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', padding: 15, margin: 10, }}>
                                <Text>hdfg</Text>
                            </TouchableOpacity>

                            <View style={{ borderRadius: 10, padding: 25, backgroundColor: 'white', width: '80%', height: 100 }}>
                                <Text>NJ:wooomo /78898798324ß </Text>

                                <TouchableOpacity style={{ borderRadius: 25, backgroundColor: 'red', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', color: 'white', padding: '20', justifyContent: 'center', }}>
                                    <Text style={{ color: 'white' }} >Desh Now</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../assets/icons/map.png')}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const track = StyleSheet.create({
    authContainer: {
        width: '90%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20,
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});

export default Track;


// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import Geolocation from 'react-native-community-geolocation';
// const { width, height } = Dimensions.get('window');
// class CurrentPosition extends Component {
//     constructor() {
//         super();
//         this.state = {
//             region: {
//                 latitude: '',
//                 longitude: '',
//                 latitudeDelta: '',
//                 longitudeDelta: '',
//                 accuracy: '',
//             },
//         };
//     }
//     calDelta(lat, long, accuracy) {
//         const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
//         const latDelta = accuracy / oneDegreeOfLatitudeInMeters;
//         const longDelta =
//             accuracy /
//             (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));
//         this.setState({
//             region: {
//                 latitude: lat,
//                 longitude: long,
//                 latitudeDelta: latDelta,
//                 longitudeDelta: longDelta,
//                 accuracy: accuracy,
//             },
//         });
//     }
//     componentWillMount() {
//         this.watchID = navigator.geolocation.watchPosition(
//             position => {
//                 const lat = position.coords.latitude;
//                 const long = position.coords.longitude;
//                 const accuracy = position.coords.accuracy;
//                 this.calDelta(lat, long, accuracy);
//             },
//             error => {
//                 console.log(error.message);
//             },
//             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//         );
//     }
//     componentWillUnmount() {
//         navigator.geolocation.clearWatch(this.watchID);
//     }
//     marker() {
//         return {
//             latitude: this.state.region.latitude,
//             longitude: this.state.region.longitude,
//         };
//     }
//     render() {
//         console.log(this.state.region);
//         return (
//             <View style={styles.container}>
//                 {this.state.region.latitude ? (

//                     <MapView
//                         showsMyLocationButton={true}
//                         provider={PROVIDER_GOOGLE}
//                         style={styles.map}
//                         initialRegion={this.state.region}>
//                         <MapView.Marker
//                             coordinate={this.marker()}
//                             title="You"
//                             description="You are here!"
//                             pinColor="green"
//                         />
//                     </MapView>
//                 ) : (
//                         <Text>cordinates not found</Text>
//                     )}
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     map: {
//         width: width,
//         height: height,
//         flex: 1,
//     },
// });
// export default CurrentPosition;
