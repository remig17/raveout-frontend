import { Text, View, Button, StyleSheet } from 'react-native';
import NavbarScreen from './NavbarScreen';

export default function HomeScreen({ navigation }) {

 


  return (
    <View style={styles.container}>
      <NavbarScreen style={styles.navbar}/>
      <View style={styles.content}>
        <Button
          title="Preferences"
          onPress={() => navigation.navigate('Preference')}
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
        <Button
          title="SignInFormEmail"
          onPress={() => navigation.navigate('SignInFormEmail')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#262626',
  },
  
});
