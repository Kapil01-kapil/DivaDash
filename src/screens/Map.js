import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import Card from '../components/UI/Card';
import Icon from 'react-native-vector-icons/Ionicons';
const Map = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.MainContainer}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 28.57966,
          longitude: 77.32111,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Upcomping Order details</Text>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Contact Number
              </Text>

              <View style={{margin: 10}}>
                <Text>kapil</Text>
                <Text>9111606923</Text>
                <Text>kapilvidua001@gmail.com</Text>
              </View>

              <Text style={{fontWeight: 'bold', fontSize: 15}}>Delivery</Text>

              <Text style={{margin: 10}}>B1 Guar city 2 divyansh flora </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: 'red'}}
                  onPress={() => {
                    props.navigation.navigate('MapSecond');
                  }}>
                  <Text style={styles.textStyle}>Accept</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: 'red'}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Reject</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          height: 110,
          width: '90%',
          marginBottom: 40,
          flexDirection: 'row',
        }}>
        <Icon name="ios-add-circle-sharp" color="red" size={35} />
        <Card style={styles.product}>
          <View style={styles.touchable}>
            <TouchableOpacity>
              <View>
                <View style={styles.imageContainer}>
                  <Text style={{fontWeight: 'bold', padding: 15}}>
                    No wooDmaod/ Anbfn
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          borderRadius: 20,
          backgroundColor: 'red',
          width: '50%',
          justifyContent: 'center',
          alignContent: 'center',
          height: 40,
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
          Dash Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  product: {
    height: 100,
    width: '90%',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '80%',

    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    height: '17%',
    padding: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 13,
    marginVertical: 2,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '90%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontWeight: 'bold',

    textAlign: 'center',
    fontSize: 18,
  },
});
