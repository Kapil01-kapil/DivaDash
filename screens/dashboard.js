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
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/style'


const Dashboard = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.maincontainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <TouchableOpacity style={dashboard.order_card} onPress={() => navigation.navigate('Upcoming Order')}>
                            <Image
                                style={dashboard.gallary}
                                source={require('../assets/icons/calender.png')}
                            />
                            <Text style={dashboard.order_card_title}>Upcoming order</Text>
                            <Text style={dashboard.order_card_quantity}>20</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={dashboard.order_card} onPress={() => navigation.navigate('Pending Order')}>
                            <Image
                                style={dashboard.gallary}
                                source={require('../assets/icons/calender.png')}
                            />
                            <Text style={dashboard.order_card_title}>Pending Order</Text>
                            <Text style={[dashboard.order_card_quantity, dashboard.pending_order]}>500</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={dashboard.order_card} onPress={() => navigation.navigate('Cancelled Order')}>
                            <Image
                                style={dashboard.gallary}
                                source={require('../assets/icons/calender.png')}
                            />
                            <Text style={dashboard.order_card_title}>Cancelled Order</Text>
                            <Text style={[dashboard.order_card_quantity, dashboard.cancel_order]}>20</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={dashboard.order_card} onPress={() => navigation.navigate('Delivered Order')}>
                            <Image
                                style={dashboard.gallary}
                                source={require('../assets/icons/calender.png')}
                            />
                            <Text style={dashboard.order_card_title}>Delivered Orde</Text>
                            <Text style={dashboard.order_card_quantity}>112</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={dashboard.order_card} onPress={() => navigation.navigate('My Earning')}>
                            <Image
                                style={dashboard.gallary}
                                source={require('../assets/icons/calender.png')}
                            />
                            <Text style={dashboard.order_card_title}>My Earning</Text>
                            <Text style={[dashboard.order_card_quantity, dashboard.earning]}>₹ 2000</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={dashboard.order_card} onPress={() => navigation.navigate('Profile')}>
                            <Image
                                style={dashboard.gallary}
                                source={require('../assets/icons/calender.png')}
                            />
                            <Text style={dashboard.order_card_title}>Profile</Text>
                            <Text style={[dashboard.order_card_quantity, dashboard.earning]}>₹ 2000</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={dashboard.order_card} onPress={() => navigation.navigate('Track Address')}>
                            <Image
                                style={dashboard.gallary}
                                source={require('../assets/icons/calender.png')}
                            />
                            <Text style={dashboard.order_card_title}>Track Address</Text>
                            <Text style={[dashboard.order_card_quantity, dashboard.earning]}>₹ 2000</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const dashboard = StyleSheet.create({
    order_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 16,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        marginBottom: 16
    },
    gallary: {
        width: 40,
        height: 40
    },
    order_card_title: {
        fontSize: 16
    },
    order_card_quantity: {
        borderWidth: 2,
        borderColor: '#c1272d',
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 4,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4BB543'
    },
    pending_order: {
        color: '#FFCC00',
    },
    cancel_order: {
        backgroundColor: '#c1272d',
        color: '#fff',
        borderRadius: 4
    },
    earning: {
        paddingHorizontal: 14
    }
});

export default Dashboard;
