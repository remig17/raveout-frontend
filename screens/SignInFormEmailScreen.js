import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, SafeAreaView } from "react-native"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
export default function SignInFormEmailScreen({navigation}){

    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
    const [signInEmail, setsignInEmail] = useState('');
	const [signInPassword, setsignInPassword] = useState('');


    const handleRegister = () => {
		fetch('http://10.2.2.38:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ password: signInPassword, email: signInEmail }),
		}).then(response => response.json())
			.then(data => {

                console.log("checkData", data)
				if (data.result) {
					dispatch(login({ token: data.token, email: signInEmail }));
                    setsignInEmail('');
					setsignInPassword('');
                    navigation.navigate('Home')
                
				}
			});
	};

    return( 
        <SafeAreaView style={styles.all}>
        <KeyboardAvoidingView style={styles.main} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.title}>Sign In</Text>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(value) => setsignInEmail(value)} value={signInEmail}></TextInput>
                <TextInput style={styles.input} placeholder="Password" onChangeText={(value) => setsignInPassword(value)} value={signInPassword}></TextInput>
                <TouchableOpacity style={styles.signin}>
                <Text style={styles.signinText} onPress={() => {handleRegister()}}>Sign in</Text>
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
        width:'100%', 
    },
    input: {
        flex: 1,
        backgroundColor: "#F2F3F3",
        width: '80%',
        height: '10%',
        marginBottom: 10,
        borderRadius: 5,
    },
    signin: {
        padding: 15,
        width: 330,
        backgroundColor: '#7C4DFF',
        borderRadius: '10%',
    },
    signinText: {
        color: 'white',
        fontFamily: 'PoppinsBold',
        textAlign: 'center',
        fontSize : 20,
    }
})