export default function MapScreen() {
    const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);
  
    useEffect(() => {
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status === 'granted') {
          Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
            const { latitude, longitude } = location.coords;
            setCurrentLocation({ latitude, longitude });
            updateDistances({ latitude, longitude });
          });
        }
      })();
    }, []);
  
    useEffect(() => {
      (async () => {
        const response = await fetch(`http://${PORT}:3000/events/showAllEvent`);
        const data = await response.json();
        setLocations(data.event);
      })();
    }, []);
  
    const toRadius = (deg) => {
      return deg * (Math.PI / 180);
    };
  
    const convertCoordsToKm = (origin, target) => {
      const R = 6371;
  
      const latRadians = toRadius(target.latitude - origin.latitude) / 2;
      const longRadians = toRadius(target.longitude - origin.longitude) / 2;
  
      const a =
        Math.pow(Math.sin(latRadians), 2) +
        Math.cos(toRadius(origin.latitude)) *
          Math.cos(toRadius(target.latitude)) *
          Math.pow(Math.sin(longRadians), 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      return (R * c).toFixed(2);
    };
  
    const updateDistances = (userCoordinates) => {
      const newLocations = locations.map((data) => {
        return {
          ...data,
          distance: convertCoordsToKm(userCoordinates, data.coordinates),
        };
      });
  
      setLocations(newLocations);
    };
  
    const markers = locations.map((data, i) => {
      return (
        <Marker
          key={i}
          coordinate={{
            latitude: data.latitude,
            longitude: data.longitude,
          }}
          title={`${data.name}\n${data.lieu}`}
          description={`${data.distance}km`}
          image={data.image}
          anchor={{ x: 0.5, y: 0.5 }}
        />
      );
    });
  
    return (
      <View style={styles.container}>
        <NavbarScreen></NavbarScreen>
        <MapView
          style={styles.map}
          showsUserLocation
          initialRegion={{
            latitude: 46.232193,
            longitude: 2.209667,
            latitudeDelta: 14.1922,
            longitudeDelta: 14.1421,
          }}
        >
          {markers}
        </MapView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: 'black',
    },
    content: {
      backgroundColor: '#262626',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  