import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';


import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working afafai on your app!</Text>
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
