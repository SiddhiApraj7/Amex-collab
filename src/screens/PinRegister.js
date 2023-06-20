import { View, Text, Image, SafeAreaView, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import NumberInput from '../components/NumberInput';
import { useForm } from "react-hook-form";
import { AppContext } from "../../AppContext";
import { useState } from "react";
import { useContext } from 'react';
import CryptoJS from "react-native-crypto-js";
import axios from 'axios';


const PinRegister = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  async function updateUser(phoneNumber, pin) {
    setIsLoading(true);
    let cipherPin = CryptoJS.AES.encrypt(pin, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu").toString();
    console.log(cipherPin);
    try {
      console.log(pin);
      const response = await axios.patch('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-user', {
        phoneNumber: phoneNumber,
        walletPin: cipherPin,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert(error);
      setError('User already exists, please login.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login');
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }

  const onPinPress = (data) => {

    try {
      if (data.pin === data.repin) {
        console.log('PINs matched');
        updateUser(phoneNumber, data.pin);
        navigation.navigate('selectRole');
      }
      else {
        console.log('RePin does not match Pin');
        alert('RePin does not match Pin. Please re-enter your repin.');
        navigation.navigate("pinRegister");
      }
    }
    catch (error) {
      alert(error);
      console.log(error);



    }

  }


  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">


        <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>

        <Text className="font-bold text-xl p-3 mb-5">PIN Registration</Text>

        <View className="h-full w-full bg-blue-300 rounded-t-3xl">

          <Text className="text-center mt-14  mb-1 font-semibold text-lg"> Enter 4 digit PIN: </Text>
          <NumberInput
            name="pin"
            placeholder="XXXX"
            control={control}
            secureTextEntry={true}
            keyboardType='phone-pad'
            maxlength={4}

          />

          <Text className="text-center mt-10  mb-1 font-semibold text-lg"> Re-enter PIN: </Text>
          <NumberInput
            name="repin"
            placeholder="XXXX"
            control={control}
            secureTextEntry={true}
            keyboardType='phone-pad'
            maxlength={4}

          />

          <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl"><Button onPress={handleSubmit(onPinPress)} className="text-black text-center" color="#82E0AA" title="Submit"></Button></View>

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