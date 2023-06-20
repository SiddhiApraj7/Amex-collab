import { View, Text , TextInput, Image, SafeAreaView, Button ,Pressable, ActivityIndicator} from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput';
import { useState, useContext } from 'react';
import NumberInput from '../components/NumberInput';
import {useForm,Controller} from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../../AppContext';
import CryptoJS from "react-native-crypto-js";
// post menthod 
import axios from 'axios';
// add phone number input box

const Login = () => {
  // const [pin,setPin] = useState('');
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const [error, setError] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSignInPress = async (data) => {
    setIsLoading(true);
    
    try {
      const response = await axios.post('http://192.168.1.45:3000/login', {
        phoneNumber: data.phoneNumber,
        pin : data.pin
      });
  
      console.log(response.data);
      // Assuming the response contains the hashed PIN and salt from the server
  
      const valid = response.data;
  
      if (valid) {
        setPhoneNumber(data.phoneNumber);
        navigation.navigate('selectRole');
      } else {
        alert('Incorrect Pin. Please try again.');
        setError('Incorrect Pin. Please try again.');
        setTimeout(() => {
          setError('');
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      alert(error);
      setError('Error during verification. Please try again.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login');
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-14 w-1/2 mt-10"
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">Login</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl">
              <Text className="text-center mt-16 font-semibold text-lg"> Enter your registered phone number : </Text>
              <NumberInput
                name = "phoneNumber"
                placeholder="+91XXXXXXXXXX"
                control = {control}
                secureTextEntry={false}
                keyboardType='phone-pad'
              />
              <Text className="text-center mt-16 font-semibold text-lg"> Enter your wallet pin : </Text>
              <NumberInput
                name = "pin"
                placeholder="XXXX"
                control = {control}
                secureTextEntry={true}
                keyboardType='phone-pad'
              />

            

            <View className="mx-28 p-4 mb-10  mt-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Submit" onPress={handleSubmit(onSignInPress)}/></View>

            {isLoading && (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        
            </View>
            
        </View>
        </SafeAreaView>
    
  )
}
const styles = {
  warningText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
};

export default Login;