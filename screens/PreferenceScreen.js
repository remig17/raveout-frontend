import { View, Text, Button } from "react-native"

export default function PreferenceScreen({ navigation }){

    return(
        <View>
            <Text>Preference Screen</Text>

            <Button
       title="Go to Home"
       onPress={() => navigation.navigate('Home')}
     />
        </View>
    )
}