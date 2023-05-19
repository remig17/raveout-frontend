import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./screens/HomeScreen";
import PreferenceScreen from "./screens/PreferenceScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignUpSignInScreen from "./screens/SignUpSignInScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpFormEmailScreen from "./screens/SignUpFormEmailScreen";
import SignInFormEmailScreen from "./screens/SignInFormEmailScreen";
import MapScreen from "./screens/MapScreen";
import TicketScreen from "./screens/TicketScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LikeScreen from "./screens/LikeScreen";
import NavbarScreen from "./screens/NavbarScreen";
import EventScreen from "./screens/EventScreen";
import { useFonts } from "expo-font";

//redux imports
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import event from "./reducers/event";

//redux-persist imports
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({ user, event });
const persistConfig = { key: "raveout", storage: AsyncStorage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Map") {
            iconName = "search";
          } else if (route.name === "Ticket") {
            iconName = "ticket";
          } else if (route.name === "Profile") {
            iconName = "user-secret";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#7C4DFF",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "#000000",
        tabBarInactiveBackgroundColor: "#000000",
        labeled: "false",
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 0,
          height: 100,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
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
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            style={styles.container}
          >
            <Stack.Screen name="SignUpSignIn" component={SignUpSignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="SignUpFormEmail"
              component={SignUpFormEmailScreen}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen
              name="SignInFormEmail"
              component={SignInFormEmailScreen}
            />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Preference" component={PreferenceScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
            <Stack.Screen name="Navbar" component={NavbarScreen} />
            <Stack.Screen name="Like" component={LikeScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
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
