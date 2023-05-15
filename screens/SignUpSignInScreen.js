import { View, Text, Button, TouchableOpacity, StyleSheet, Image} from "react-native"

export default function SignUpSignInScreen({ navigation }){

    return(
        <View style={styles.container}>

        <Image source={require('../assets/logo1.png') } style={styles.logo}></Image>

        <View style={styles.imgContainer}>
            <TouchableOpacity style={styles.signup}>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signin}>
                <Text style={styles.signinText}>Sign In</Text>
            </TouchableOpacity>

        </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    imgContainer: {
        color: 'white',
    },
    signupText: {
        color: 'white',
    },
    signinText: {
        color: 'white',
    }
  });

   