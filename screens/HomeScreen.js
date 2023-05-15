import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';


  export default function HomeScreen({ navigation }) {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Preferences"
          onPress={() => navigation.navigate('PreferenceScreen')}
        />
      </View>
    );
   }