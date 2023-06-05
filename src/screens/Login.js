import { View, Text , TextInput, Image, SafeAreaView, Button ,Pressable} from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import NumberInput from '../components/NumberInput';



const Login = () => {
  const [pin,setPin] = useState('');

  const onSignInPress = () => {
    console.warn('sign in')
  }
  
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 "
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">Login</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl">
              <Text className="text-center mt-16 font-semibold text-lg"> Enter your wallet pin : </Text>
              <NumberInput
                placeholder="XXXX"
                value = {pin}
                setValue = {setPin}
                secureTextEntry={true}
                keyboardType='phone-pad'
              />

            <View className="mx-28 p-4 mb-10  mt-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Submit" onPress={onSignInPress}/></View>

            </View>
            
        </View>
        </SafeAreaView>
    
  )
}

export default Login;