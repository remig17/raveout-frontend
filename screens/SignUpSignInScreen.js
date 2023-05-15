import { View, Text, Button, TouchableOpacity, StyleSheet, Image} from "react-native"

export default function SignUpSignInScreen({ navigation }){

    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <Image source={require('../assets/logo1.png') } style={styles.logo}></Image>

            </View>


        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signin}>
                <Text style={styles.signinText} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
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
        paddingBottom: 20,
        marginBottom: 100,
    },
    signup: {
        borderWidth: 2,
        borderColor: 'gray',
        padding: 15,
        width: 330,
        borderRadius: '10%',
        marginBottom: 10,
    },
    signin: {
        padding: 15,
        width: 330,
        backgroundColor: '#7C4DFF',
        borderRadius: '10%',

    },
    signupText: {
        color: 'white',
        fontFamily: 'PoppinsBold',
        textAlign: 'center',
        fontSize : 20,

    },
    signinText: {
        color: 'white',
        fontFamily: 'PoppinsBold',
        textAlign: 'center',
        fontSize : 20,
    }
  });

   