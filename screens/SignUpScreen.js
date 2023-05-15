import { View, Text, Button } from "react-native"

export default function SignUpScreen({ navigation }){

    return(
        <View>
            <Text>SignUp Screen</Text>

            <Button
       title="Go to Home"
       onPress={() => navigation.navigate('Home')}
     />
        </View>
    )
}