import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';


import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

const App = () => {
  return (
    <View className ="bg-blue-300">
      <Text className= "text-red-700"> Open up App.js to start working afafai on your app!</Text>
      <StatusBar style="auto" />
      <SignOutButton />
    </View>
  );
}

export default withAuthenticator(App);

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user]

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Hello, {user.username}! Click here to sign out!</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Fingerprint from './screens/Fingerprint';
// import HomePage from "./screens/HomePage";
// import Login from "./screens/Login";
// import PinRegister from "./screens/PinRegister";
// import UserDetails from './screens/UserDetails';
// import Phone from './screens/Phone';
// import SelectRole from './screens/SelectRole';
// export default function App() {
//   // wherever the useState is located 
  
//   const Stack = createNativeStackNavigator();


//   return (
    
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="home" component={HomePage}></Stack.Screen>
//       <Stack.Screen name="login" component={Login}></Stack.Screen>
//       <Stack.Screen name="fingerprint" component = {Fingerprint}></Stack.Screen>
//       <Stack.Screen name="pinRegister" component = {PinRegister}></Stack.Screen>
//       <Stack.Screen name="userDetails" component = {UserDetails}></Stack.Screen>
//       <Stack.Screen name="otp" component={Phone}></Stack.Screen>
//       <Stack.Screen name="selectRole" component={SelectRole}></Stack.Screen>
//     {/* <Stack.Screen name="fin gerprint" component={Fingerprint} /> */}
//   </Stack.Navigator>
// </NavigationContainer>
//   );
// }
