
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, StatusBar, Text, Button } from 'react-native';

import styles, { pink } from '../styles/style'

import { Tab, Tabs } from 'native-base';

class Profile extends React.Component {
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
                            <View>
                                <Text style={{ color: pink, fontSize: 24, fontWeight: 'bold' }}>Abhishek Gautam</Text>
                                <Text style={profile.detail}>abhishek.gautam8859@gmail.com</Text>
                            </View>
                            <Tabs style={{marginTop: 16,}} tabBarUnderlineStyle={{backgroundColor: pink, height: 1,}}>
                                <Tab heading="Profile" activeTextStyle={{color: pink}}>
                                    <View style={profile.profile_card}>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>First Name</Text>
                                            <Text style={profile.detail}>Abhishek</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Last Name</Text>
                                            <Text style={profile.detail}>Gautam</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Email</Text>
                                            <Text style={profile.detail}>abhishek@gmail.com</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Gender</Text>
                                            <Text style={profile.detail}>Male</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Mobile Number</Text>
                                            <Text style={profile.detail}>9999999999</Text>
                                        </View>
                                    </View>


                                </Tab>
                                <Tab heading="Vehicle" activeTextStyle={{color: pink}}>

                                    <View style={profile.profile_card}>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>First Name</Text>
                                            <Text style={profile.detail}>Abhishek</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Last Name</Text>
                                            <Text style={profile.detail}>Gautam</Text>
                                        </View>

                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Licence No.</Text>
                                            <Text style={profile.detail}>DGKPA12312434534</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Vehicle No.</Text>
                                            <Text style={profile.detail}>UP16AJ6816</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Exp. Date</Text>
                                            <Text style={profile.detail}>02/02/2030</Text>
                                        </View>
                                        <Text style={[profile.label, { fontWeight: 'bold', marginBottom: 16 }]}>Vehicle Details:</Text>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Modal</Text>
                                            <Text style={profile.detail}>2019</Text>
                                        </View>
                                        <View style={profile.spacing}>
                                            <Text style={profile.label}>Color</Text>
                                            <Text style={profile.detail}>Black</Text>
                                        </View>
                                    </View>
                                </Tab>
                                <Tab heading="Setting" activeTextStyle={{color: pink}}>

                                    <View style={profile.profile_card}>
                                        <Text>Setting</Text>
                                    </View>


                                </Tab>
                            </Tabs>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    };
}

const profile = StyleSheet.create({
    profile_card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 30,
        borderRadius: 14,
        margin: 10
    },
    spacing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    label: {
        fontSize: 16
    },
    detail: {
        color: pink,
        fontSize: 16
    }
});

export default Profile;
