import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"

export default function SignUpScreen({ navigation }){

    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <Image source={require('../assets/logo1.png') } style={styles.logo}></Image>

            </View>


        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.googlebtn}>
                <View style={styles.google}>
                
                <Text style={styles.googletext}> 
                 Sign up with Google</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applebtn} >
                <Text style={styles.appletext}> Sign up with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signin}>
                <Text style={styles.signinText} onPress={() => navigation.navigate('SignUpFormEmail')}>Sign up with E-mail</Text>
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

    googlebtn: {
        borderWidth: 2,
        borderColor: 'gray',
        padding: 10,
        width: 330,
        borderRadius: '10%',
        marginBottom: 10,
    },
    applebtn: {
        borderWidth: 2,
        borderColor: 'gray',
        padding: 10,
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
    googletext:{
        color: 'white',
        fontFamily: 'PoppinsBold',
        fontSize : 20,
        textAlign: 'center',
    },
    appletext:{
        color: 'white',
        fontFamily: 'PoppinsBold',
        fontSize : 20,
        textAlign: 'center',
        
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
    },
    btnContainer: {

    },
   
  
   
  });
