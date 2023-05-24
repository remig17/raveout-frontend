import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";
import { PORT } from "@env";

export default function SignUpFormEmailScreen({ navigation }) {
  const dispatch = useDispatch();
  const [signUpPseudo, setSignUpPseudo] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleRegister = () => {
    fetch(`http://${PORT}:3000/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pseudo: signUpPseudo,
        password: signUpPassword,
        email: signUpEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("''data'", data);
        // console.log("'''", data.token);

        console.log("avatar test", data);

        if (data.result) {
          dispatch(
            login({
              pseudo: signUpPseudo,
              token: data.token,
              email: signUpEmail,
              avatar: data.avatar,
            })
          );
          setSignUpPseudo("");
          setSignUpEmail("");
          setSignUpPassword("");
          navigation.navigate("Preference");
        }
      });
  };

  return (
    <SafeAreaView style={styles.all}>
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Pseudo"
            onChangeText={(value) => setSignUpPseudo(value)}
            value={signUpPseudo}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(value) => setSignUpEmail(value)}
            value={signUpEmail}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(value) => setSignUpPassword(value)}
            value={signUpPassword}
          ></TextInput>
          <TouchableOpacity style={styles.signup}>
            <Text
              style={styles.signupText}
              onPress={() => {
                handleRegister();
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: "white",
  },

  main: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    color: "black",
    textAlign: "center",
    fontFamily: "PoppinsBold",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
  },
  form: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F2F3F3",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  signup: {
    padding: 15,
    width: 330,
    backgroundColor: "#7C4DFF",
    borderRadius: "10%",
  },
  signupText: {
    color: "white",
    fontFamily: "PoppinsBold",
    textAlign: "center",
    fontSize: 20,
  },
});
