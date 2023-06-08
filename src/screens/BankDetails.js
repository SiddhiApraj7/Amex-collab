import { View, Text , TextInput, Image, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import NumberInput from '../components/NumberInput';
import {useForm,Controller} from "react-hook-form";
import { useState,useRef } from 'react';
import Number_input2 from '../components/Number_input2';
const BankDetails = () => {
    const navigation = useNavigation();
    const [accNumber, setaccNumber] = useState(null);
    const [accHolderName, setaccHolderName] = useState(' ');
    const [bankName, setBankName] = useState('');
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 mt-5"
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">Bank Details</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl"> 

            <Text className="text-center mt-12  mb-1 font-semibold text-lg"> Enter your details: </Text>
            
            <View className="flex-col pl-10 gap-5">
                  <Number_input2
                  placeholder="Account Number"
                  value = {accNumber}
                  setValue = {setaccNumber}
                  secureTextEntry={true}
                  keyboardType="phone-pad"
                  />
                
                  <Number_input2
                  placeholder="Bank Name"
                  value = {bankName}
                  setValue = {setBankName}
                  secureTextEntry={true}
                  keyboardType="keyboard"
                  />
                  
                  
                  <Number_input2
                  placeholder="Account Holder Name"
                  value = {accHolderName}
                  setValue = {setaccHolderName}
                  secureTextEntry={true}
                  keyboardType="keyboard"
                  />
           
            </View>
            
            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
                  <Button color = "#82E0AA" onPress={() => {
                    navigation.navigate("pinRegister");
                  }}title="Next"></Button>
                  </View>
            </View>

            </View>
        </SafeAreaView>
  )
}

export default BankDetails;