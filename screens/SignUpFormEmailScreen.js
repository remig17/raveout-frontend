import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView, SafeAreaView } from "react-native"


export default function SignUpFormEmailScreen({navigation}){


    return( 
        <SafeAreaView style={styles.all}>
        <KeyboardAvoidingView style={styles.main} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.title}>Sign Up</Text>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Pseudo"></TextInput>
                <TextInput style={styles.input} placeholder="Email"></TextInput>
                <TextInput style={styles.input} placeholder="Password"></TextInput>
                <TouchableOpacity style={styles.signup}>
                <Text style={styles.signupText} onPress={() => navigation.navigate('SignUpFormEmail')}>Sign up</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    all: {
        backgroundColor: 'white',
    },

    main: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'center',

    },
    title: {
        flex: 1,
        color: 'black', 
        textAlign: 'center',
        fontFamily: 'PoppinsBold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
    },
    form: {
        flex: 1,
        alignItems: 'center',
        
    },
    input: {
        flex: 1,
        backgroundColor: "#F2F3F3",
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    signup: {
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
    }
})