import { View, Text , TextInput, Image, SafeAreaView, Button ,Pressable, ActivityIndicator} from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput';
import { useState, useContext } from 'react';
import NumberInput from '../components/NumberInput';
import {useForm,Controller} from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../../AppContext';
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

  const VerifyUser = async(data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://192.168.1.45:3000/login', {
        phoneNumber: data.phoneNumber,
        walletPin : parseInt(data.pin),
      });

      console.log(response.data);
      if(response.data.isPinMatched === true){
        setPhoneNumber(data.phoneNumber);
        navigation.navigate('selectRole');
      }
      else{
        alert('Incorrect Pin. Please try again.');
        setError('Incorrect Pin. Please try again.');
        setTimeout(() => {
          setError('');
        }, 4000); // Redirect to login screen after 3 seconds
      }
    } catch (error) {
      console.log(error);
      alert(error);
      setError('Error during verification. Please try again.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login'); // Replace 'Login' with the name of your login screen
      }, 3000); // Redirect to login screen after 3 seconds
    } finally {
      setIsLoading(false);
    }
  }

  const onSignInPress = async(data) => {
    console.log(data);
    await VerifyUser(data);

  }
  
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 mt-5"
            
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