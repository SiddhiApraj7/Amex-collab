import { View, Text, SafeAreaView, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { useContext } from 'react';

const Phone_test = () => {
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const navigation = useNavigation();
  const [error, setError] = useState('');

  async function createUser(phoneNumber) {
    try {
      const response = await axios.post('http://192.168.29.208:3000/create-user', {
        phoneNumber: phoneNumber,
      });

      console.log(response.data);
      navigation.navigate('userDetails');
    } catch (error) {
      console.log(error);
      alert(error);
      setError('User already exists, please login.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login'); // Replace 'Login' with the name of your login screen
      }, 3000); // Redirect to login screen after 3 seconds
    }
  }

  return (
    <SafeAreaView className="bg-white h-full content-center">
      <View className="items-center  mt-48 bg-white h-full">
        <TextInput
          className="mb-12"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="+910000000000"
          keyboardType="phone-pad"
        />

        {error ? <Text style={styles.warningText}>{error}</Text> : null}

        <Button
          className="mt-12 mb-5"
          title="verify"
          onPress={() => {
            createUser(phoneNumber);
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  warningText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
};

export default Phone_test;
