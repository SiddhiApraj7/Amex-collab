import { View, Text , TextInput, Image, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import NumberInput from '../components/NumberInput';
import {useForm,Controller} from "react-hook-form";

const BankDetails = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 "
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">Bank Details</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl"> 

            <Text className="text-center mt-12  mb-1 font-semibold text-lg"> Enter your details: </Text>
            <View className="flex-col pl-10 gap-5">
            <View className="flex-row gap-4">
                <Ionicons name="wallet-outline" color="white" className="top-6" size={40}></Ionicons>
              <TextInput className="bg-white mt-16 p-2 h-11 w-56 mx-14 font-light rounded-md" placeholder="Bank Name"/>
     
            </View>
            <View className="flex-row gap-4">
            <Ionicons name="person-circle-outline" color="white" className="top-6" size={40}></Ionicons>
              <TextInput value={Number} className="bg-white mt-4 w-56 h-11 mx-14 p-2 font-light rounded-md" placeholder="Account Number"/>
            </View>

            <View className="flex-row gap-4">
            <Ionicons name="mail-outline" color="white" className="top-6" size={40}></Ionicons>
              <TextInput className="bg-white mt-4 h-11 mx-14 p-2 w-56 font-light rounded-md" placeholder="Account Holder Name"/>
            </View>

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