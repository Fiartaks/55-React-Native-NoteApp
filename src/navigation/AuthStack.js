import { LoginPage, SignupPage } from '../screens'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack= createNativeStackNavigator();

const AuthStack = () => {
  return (
   <Stack.Navigator
   initialRouteName='LoginPage'
   screenOptions={{headerShown:false}}
   >

     <Stack.Screen name="LoginPage" component={LoginPage} />
     <Stack.Screen name="Signup" component={SignupPage} />

   </Stack.Navigator>
  )
}
export default AuthStack;
