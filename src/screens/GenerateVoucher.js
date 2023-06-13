import { View, Text, SafeAreaView, Image, Button , ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState, useEffect } from "react";

const GenerateVoucher = () => {
    const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
 // const { phoneNumber, setPhoneNumber } = useContext(AppContext);

  async function fetchUserInfo() {
    const phoneNumber = "+911234";
    try {
      const response = await axios.get(`http://192.168.1.45:3000/get-user-info/${phoneNumber}`);
      console.log(response.data);
      const user = response.data;
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setBankName(user.bankName);
    } catch (error) {
      console.error(error);
      console.log(error);
      /* alert(error);
      setError('User already exists, please login.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login'); // Replace 'Login' with the name of your login screen
      }, 3000); */ // Redirect to login screen after 3 seconds
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-52 "
    
    source = {require('../../assets/e-rupi.png')}></Image>
    <View className="flex-row gap-2 ml-5 w-96 justify-between">
            <View className="flex-row gap-2">
              <Ionicons name="person-circle" size={36}></Ionicons>
              <View className="pb-0">
                <Text className="font-medium text-lg mr-7">{firstName} {lastName}</Text>
                {/* <Text className="font-light text-sm mr-7">Infosys - HR Head</Text> */}
              </View>
            </View>
            <View className="pt-1 mr-5">
              <Text className="font-medium text-lg">{bankName}</Text>
            </View>
          </View>
    <View className="mt-5">
    <Text className="font-bold text-lg p-1 mb-2">Generate Voucher</Text>
    </View>

    <View className="bg-blue-300 h-4/5 w-full rounded-lg">
        <View className="px-5 py-3 flex-col gap-1">
            <Text className="font-bold text-sm">Wallet Number</Text>
            <View className="bg-gray-100 w-full h-10 rounded-lg"></View>
        </View>

        <View className="px-5 py-1 flex-col gap-1">
            <Text className="font-bold text-sm">Validity</Text>
            <View className="bg-gray-100 w-full h-10 rounded-lg"></View>
        </View>

        <View className="px-5 py-1 flex-col gap-2">
            <Text className="font-bold text-sm">Amount</Text>
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