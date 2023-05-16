import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./screens/HomeScreen";
import PreferenceScreen from "./screens/PreferenceScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignUpSignInScreen from "./screens/SignUpSignInScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpFormEmailScreen from "./screens/SignUpFormEmailScreen";
import SignInFormEmailScreen from "./screens/SignInFormEmailScreen";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";

const store = configureStore({
  reducer: { user },
});
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const TabTopNavigator = () => {
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = '';

        if (route.name === 'Map') {
          iconName = '';
        } else if (route.name === 'Like') {
          iconName = 'heart';
        } 

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ec6e5b',
      tabBarInactiveTintColor: '#335561',
      headerShown: false,
    })}>
      <Tab.Screen name="Like" component={LikeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};

  



const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = '';

        if (route.name === 'Home') {
          iconName = 'location-arrow';
        } else if (route.name === 'Ticket') {
          iconName = 'map-pin';
        } else if (route.name === "Profile") {
          iconName = 'profile'
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ec6e5b',
      tabBarInactiveTintColor: '#335561',
      headerShown: false,
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Places" component={PlacesScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [loaded] = useFonts({
    PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
    PoppinsBlackItalic: require("./assets/fonts/Poppins-BlackItalic.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} style={styles.container}>
          
          <Stack.Screen name="SignUpSignIn" component={SignUpSignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignUpFormEmail" component={SignUpFormEmailScreen}/>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignInFormEmail" component={SignInFormEmailScreen}/>
          <Stack.Screen name="TabNavigator" component={TabNavigator}/>
          <Stack.Screen name="Preference" component={PreferenceScreen} />
          <Stack.Screen name="TabTopNavigator" component={TabTopNavigator}/>
          <Tab.Screen name="Home" component={HomeScreen}/>
          
         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
