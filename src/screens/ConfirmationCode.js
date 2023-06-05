import { View, Text , TextInput, Image, SafeAreaView, Button ,Pressable} from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput';
import { useState } from 'react';

const ConfirmationCode = () => {
    const [otp,setOtp] = useState('');
    const signedIn = () =>{

    }
    const resendOtp =() => {
        
    }
  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-96 "
    
    source = {require('../../assets/e-rupi.png')}></Image>
    
    <Text className="font-bold text-xl p-3 mb-5">Login</Text>

    <View className = "h-full w-full bg-blue-300 rounded-t-3xl">
      <Text className="text-center mt-12 mb-3 font-semibold text-lg"> Enter Otp send to you mobile number : </Text>
      <CustomInput
        placeholder="Otp"
        value = {otp}
        setValue = {setOtp}
        secureTextEntry={false}
      />

    <View className="mx-28 p-4 mb-1  mt-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Submit" onPress={signedIn}/></View>
    <View className="mx-28 p-4 mb-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Resend Otp" onPress={resendOtp}/></View>

    </View>
    
</View>
</SafeAreaView>
  )
}

export default ConfirmationCode