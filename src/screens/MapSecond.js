import React, { useState } from "react";  
import { StyleSheet, View,TouchableOpacity,Text,Modal, TouchableHighlight,Alert } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
  
import Card from '../components/UI/Card';
import Icon from 'react-native-vector-icons/Ionicons';
const Map = props => {
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
            latitude: 28.579660,   
            longitude: 77.321110,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}/>  
        

   <View style={styles.product}>
       
            <View style={styles.touchable}>
           
                <View>
                
                   <Text style={{margin:10}}>Delivery by 7:56pm</Text>
                   <Text style={{margin:10, fontWeight:'bold'}}>Chiplitet</Text>
                   <View style={{height:1, width:'100%', backgroundColor:'grey'}}/>
                   <Text style={{fontWeight:'bold',marginTop:10, justifyContent:'center',alignItems:'center',textAlign:'center',fontSize:20}}>$ 2.00</Text>
                  </View>
                 
              
                
                
           
              
            </View>
           
          </View>
          <TouchableOpacity   style={{flex:1,alignItems:'center', borderRadius:20, backgroundColor:'red', width:"50%", justifyContent:'center',alignContent:"center",height:40, position:'absolute', bottom:0}}>
                <Text style={{color:'white', fontWeight:'bold',textAlign:'center'}}>Accept</Text>
                </TouchableOpacity>
          
          
      </View>  
    )
}

export default Map


  
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
   height:200,
    backgroundColor:'white',
    width: '100%',
   
  },
  touchable: {
  
  },
  imageContainer: {
    width: '100%',
  marginBottom:100,

 
  },
  image: {

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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width:'90%'
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
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
    marginBottom: 10,
    fontWeight:'bold',
    
    textAlign: "center",
    fontSize:18
  }
});  