// import { StatusBar } from 'expo-status-bar';
// import { Pressable, StyleSheet, Text, View } from 'react-native';


// import { Amplify } from 'aws-amplify';
// import awsExports from './src/aws-exports';
// Amplify.configure(awsExports);

// import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

// const App = () => {
//   return (
//     <View className ="bg-blue-300">
//       <Text className= "text-red-700"> Open up App.js to start working afafai on your app!</Text>
//       <StatusBar style="auto" />
//       <SignOutButton />
//     </View>
//   );
// }

// export default withAuthenticator(App);

// // retrieves only the current value of 'user' from 'useAuthenticator'
// const userSelector = (context) => [context.user]

// const SignOutButton = () => {
//   const { user, signOut } = useAuthenticator(userSelector);
//   return (
//     <Pressable onPress={signOut} style={styles.buttonContainer}>
//       <Text style={styles.buttonText}>Hello, {user.username}! Click here to sign out!</Text>
//     </Pressable>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fingerprint from "./src/screens/Fingerprint"
import HomePage from "./src/screens/HomePage";
import Login from "./src/screens/Login";
import PinRegister from "./src/screens/PinRegister";
import UserDetails from './src/screens/UserDetails';
import Phone from './src/screens/Phone';
import SelectRole from './src/screens/SelectRole';
import BankDetails from './src/screens/BankDetails';
import beneficiaryHomePage from "./src/screens/BeneficiaryHomePage"
import E_rupi_wallet from './src/screens/E_rupi_wallet';
import E_rupee_wallet from './src/screens/E_rupee_wallet';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import GenerateVoucher from './src/screens/GenerateVoucher';
Amplify.configure(awsExports);

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import ConfirmationCode from './src/screens/ConfirmationCode';
import BeneficiaryHomePage from './src/screens/BeneficiaryHomePage';
import PvtOrgHomePage from './src/screens/PvtOrgHomePage';
import SelectServiceProvider from './src/screens/SelectServiceProvider';
import ServiceProviderHomePage from './src/screens/ServiceProviderHomePage';
import { AppProvider } from './AppContext';

export default function App() {
  // wherever the useState is located 
  
  const Stack = createNativeStackNavigator();


  return (
    <AppProvider>
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="home" component={HomePage}></Stack.Screen>
      <Stack.Screen name="login" component={Login}></Stack.Screen>
      <Stack.Screen name="fingerprint" component = {Fingerprint}></Stack.Screen>
      <Stack.Screen name="otp" component={Phone}></Stack.Screen> 
       {/* <Stack.Screen name="confirmationCode" component={ConfirmationCode}></Stack.Screen> */}
       <Stack.Screen name="userDetails" component = {UserDetails}></Stack.Screen>
      <Stack.Screen name="bankDetails" component = {BankDetails}></Stack.Screen>
      <Stack.Screen name="pinRegister" component = {PinRegister}></Stack.Screen>

    
      <Stack.Screen name="selectRole" component={SelectRole}></Stack.Screen> 
      <Stack.Screen name="beneficiaryHomePage" component={BeneficiaryHomePage}></Stack.Screen>
      <Stack.Screen name="e_rupi_wallet" component={E_rupi_wallet}></Stack.Screen>
      <Stack.Screen name="e_rupee_wallet" component={E_rupee_wallet}></Stack.Screen>
      <Stack.Screen name="pvtOrgHomePage" component={PvtOrgHomePage}></Stack.Screen>
      <Stack.Screen name="generateVoucher" component={GenerateVoucher}></Stack.Screen>
      <Stack.Screen name="selectServiceProvider" component={SelectServiceProvider}></Stack.Screen>
      <Stack.Screen name="serviceProviderHomePage" component={ServiceProviderHomePage}></Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>
</AppProvider>
  );
}





