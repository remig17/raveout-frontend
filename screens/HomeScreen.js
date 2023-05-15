import { Text, View, Button, StyleSheet } from 'react-native';


  export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.main}>
        <Text>Home Screen</Text>
        <Button
          title="Preferences"
          onPress={() => navigation.navigate('Preference')}
        />
         <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
         <Button
          title="SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          title="SignUpSignIn"
          onPress={() => navigation.navigate('SignUpSignIn')}
        />
        <Button
          title="SignIn"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Button
          title="SignUpFormEmail"
          onPress={() => navigation.navigate('SignUpFormEmail')}
        />
      </View>
    );
   }

   const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }); 