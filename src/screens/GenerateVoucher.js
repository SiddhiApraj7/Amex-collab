import { View, Text, SafeAreaView, Image, Button , ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const GenerateVoucher = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-96 mt-5"
    
    source = {require('../../assets/e-rupi.png')}></Image>
    <View className="flex-row justify-evenly gap-20">
        <View>
        <Ionicons name="people-circle-outline" size={50}></Ionicons>
        </View>
        <View className="text-center items-center">
        <Text className="font-bold text-lg">Infosys</Text>
        <Text>AMEX</Text>
        </View>
        <View className="p-2">
            <Ionicons name="arrow-back-circle-outline" size={30}></Ionicons>
        </View>
        
    </View>
    <View className="mt-5">
    <Text className="font-bold text-xl p-1 mb-2">Generate Voucher</Text>
    </View>

    <View className="bg-blue-300 h-4/5 w-full rounded-lg">
        <View className="px-5 py-3 flex-col gap-1">
            <Text className="font-bold text-md">Wallet Number</Text>
            <View className="bg-gray-100 w-full h-10 rounded-lg"></View>
        </View>

        <View className="px-5 py-1 flex-col gap-1">
            <Text className="font-bold text-md">Validity</Text>
            <View className="bg-gray-100 w-full h-10 rounded-lg"></View>
        </View>

        <View className="px-5 py-1 flex-col gap-2">
            <Text className="font-bold text-md">Amount</Text>
            <View className="bg-gray-100 w-full h-10 rounded-lg"></View>
        </View>

        <View className="mx-28 py-4  mb-1  mt-1 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Search Service Provider" onPress={() => {
              navigation.navigate("selectServiceProvider");
            }}/></View>
        <View className="p-5"><View className="p-2 bg-gray-100 rounded-lg w-full h-10"><Text className="font-semibold mx-auto ">Selected Service Provider</Text></View></View>

        <View className="text-center items-center">
        <Text className="pb-1">OR</Text>
        </View>
        
        <View>
       
            <View className="flex-row gap-5 items-center mx-auto"> 
                <Text className="text-lg mx-auto"> Select Tag</Text>
                <View className="bg-gray-100 h-6 w-1/3 rounded-lg" ></View>
            </View>
            
        </View>

        <View className="mx-28 py-4  mb-1  mt-1 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Make Request"/></View>

        
    </View>
    

  
    
</View>
</SafeAreaView>
  )
}

export default GenerateVoucher