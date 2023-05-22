import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavbarScreen from './NavbarScreen';
import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {Dimensions} from 'react-native';
import * as Location from 'expo-location';
import {PORT} from "@env";

export default function MapScreen(){

    /* const icons = {
        icon: require('./assets/1.png'),
      }; */

      const convertCoordsToKm = (coord1, coord2) => {
        const R = 6371; // Rayon de la Terre en kilomètres
      
        const lat1 = coord1.latitude;
        const lon1 = coord1.longitude;
        const lat2 = coord2.latitude;
        const lon2 = coord2.longitude;
      
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        const distance = R * c;
        return distance.toFixed(2); // Renvoie la distance arrondie à 2 décimales
      };
      
      const toRadians = (angle) => {
        return angle * (Math.PI / 180);
      };
      
      

    const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null)


    useEffect(() => {
        (async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
     
          if (status === 'granted') {
            Location.watchPositionAsync({ distanceInterval: 10 },
              (location) => {
                console.log(location);
                setCurrentLocation(location.coords);
              });
          }
        })()
        
      }, []);

      useEffect(() => {
        (async () => {
            fetch(`http://${PORT}:3000/events/showAllEvent`)
                  .then((response) => response.json())
                  .then((data) => {
                    setLocations(data.event);
                  });
        })()
      }, [])
    
  

   

    const markers = locations.map((data, i) => {

      const distance = convertCoordsToKm(currentLocation, {
        latitude: data.latitude,
        longitude: data.longitude,
      });
        
      return (
        <Marker
        key={i}
        coordinate={{
          latitude: data.latitude,
          longitude: data.longitude,
        }}
        title={`${data.name}`}
        description={`${data.lieu} - ${distance} km`}
        anchor={{ x: 0.5, y: 0.5 }}
      >
        <Image
          source={{ uri: data.photo }}
          style={{ width: 50, height: 50 }} 
          resizeMode="contain"
        />
      </Marker>
      );
    }); 
  
    return (
      <View style={styles.container}>
        <NavbarScreen></NavbarScreen>
        <MapView style={styles.map} showsUserLocation  initialRegion={{
        latitude: 46.232193,
        longitude: 2.209667,
        latitudeDelta: 14.1922,
        longitudeDelta: 14.1421,
        }}>
            {markers}
        </MapView>        
        </View>
    );
  }


const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: 'black'
    },
    content: {
        backgroundColor: "#262626"
    },
    map: {

        width: Dimensions.get('window').width,

        height: Dimensions.get('window').height

    },
})