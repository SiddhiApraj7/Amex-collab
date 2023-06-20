import { View, Text , TextInput, Image, SafeAreaView, Button, ActivityIndicator} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import NumberInput from '../components/NumberInput';
import { useForm, Controller } from "react-hook-form";
import { AppContext } from "../../AppContext";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import axios from 'axios';

// import { PrismaClient } from '../../prisma/prisma-client'
// const prisma = new PrismaClient()

const PinRegister = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  //const [verificationError, setVerificationError] = useState('');
  const [error, setError] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  async function updateUser(phoneNumber, pin) {
    setIsLoading(true);
    
    try {
      console.log(pin);
      const response = await axios.patch('http://192.168.1.45:3000/registerPin', {
        phoneNumber: phoneNumber,
        pin : pin,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert(error);
      setError('User already exists, please login.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login'); // Replace 'Login' with the name of your login screen
      }, 3000); // Redirect to login screen after 3 seconds
    } finally {
      setIsLoading(false);
    }
  } 

  const onPinPress = (data) => {
    //console.log(data.pin);
    //console.log(data.repin);
  
    try{
      if (data.pin === data.repin) {
        console.log('PINs matched');
        updateUser(phoneNumber, data.pin);
        navigation.navigate('selectRole');
    }
    else{
      console.log('RePin does not match Pin');
      alert('RePin does not match Pin. Please re-enter your repin.');
      navigation.navigate("pinRegister");
    }
  }
    catch(error){
      alert(error);
      console.log(error);
      
      

    }
      //navigation.navigate('selectRole');
  
  }

  
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">PIN Registration</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl">

              <Text className="text-center mt-14  mb-1 font-semibold text-lg"> Enter 4 digit PIN: </Text>
              <NumberInput
                name = "pin"
                placeholder="XXXX"
                control = {control}
                secureTextEntry={true}
                keyboardType='phone-pad'
                maxlength={4}
            
              />

            <Text className="text-center mt-10  mb-1 font-semibold text-lg"> Re-enter PIN: </Text>
            <NumberInput
                name = "repin"
                placeholder="XXXX"
                control = {control}
                secureTextEntry={true}
                keyboardType='phone-pad'
                maxlength = {4}
                
              />

            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl"><Button onPress={handleSubmit(onPinPress)} className="text-black text-center" color = "#82E0AA" title="Submit"></Button></View>

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

export default PinRegister;