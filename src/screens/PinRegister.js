import { View, Text , TextInput, Image, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import NumberInput from '../components/NumberInput';
import {useForm,Controller} from "react-hook-form";

import { PrismaClient } from '../../prisma/prisma-client'
const prisma = new PrismaClient()

const PinRegister = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onPinpress = (data) => {
    console.log(data);
    navigation.navigate("selectRole");
  }
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 "
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">PIN Registration</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl">

              <Text className="text-center mt-14  mb-1 font-semibold text-lg"> Enter 4 digit PIN: </Text>
              <NumberInput
                name = "pin"
                placeholder="XXXX"
                control = {control}
                secureTextEntry={true}
                keyboardType='phone-pad'
              />

            <Text className="text-center mt-10  mb-1 font-semibold text-lg"> Re-enter PIN: </Text>
            <NumberInput
                name = "re-pin"
                placeholder="XXXX"
                control = {control}
                secureTextEntry={true}
                keyboardType='phone-pad'
              />

            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl"><Button onPress={handleSubmit(onPinpress)} className="text-black text-center" color = "#82E0AA" title="Submit"></Button></View>


            
            </View>
            
        </View>
        </SafeAreaView>
    
  )
}

export default PinRegister;