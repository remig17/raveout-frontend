import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

export default function App() {
  const [loaded] = useFonts({
    PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
    PoppinsBlackItalic: require("./assets/fonts/Poppins-BlackItalic.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          style={styles.container}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Preference" component={PreferenceScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignUpSignIn" component={SignUpSignInScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen
            name="SignUpFormEmail"
            component={SignUpFormEmailScreen}
          />
          <Stack.Screen
            name="SignInFormEmail"
            component={SignInFormEmailScreen}
          />
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
