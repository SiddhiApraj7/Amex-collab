import { View, Text, SafeAreaView, Image, Button , TextInput, ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import SelectServiceProvider_comp from '../components/serviceProvider_info';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState, useEffect } from "react";

const SelectServiceProvider = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  //const { phoneNumber, setPhoneNumber } = useContext(AppContext);

  async function fetchUserInfo() {
    const phoneNumber = "+911234";
    try {
      const response = await axios.get(`http://192.168.29.208:3000/get-user-info/${phoneNumber}`);
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
    className="h-36 w-96 mt-5"
    
    source = {require('../../assets/e-rupi.png')}></Image>
    <View >
          <View className="flex-row gap-2 ml-5 w-96 justify-between">
            <View className="flex-row gap-2">
              <Ionicons name="person-circle" size={36}></Ionicons>
              <View className="">
                <Text className="font-medium my-auto text-sm mr-7">{firstName} {lastName}</Text>
                {/* <Text className="font-light text-sm mr-7">Infosys - HR Head</Text> */}
              </View>
            </View>
            <View className=" mr-5">
              <Text className="font-medium my-auto text-sm">{bankName}</Text>
            </View>
          </View>
          </View>
          
    <View className="mt-5">
    <Text className="font-bold text-xl p-1 mb-1">Select Service Provider</Text>
    </View>

    <View className="bg-gray-200 h-10 w-full flex-row space-x-6 mx-auto">
        <View className="p-1 ml-5"><Ionicons name="search-outline" size={28}></Ionicons></View>
        <TextInput placeholder="Search Service Provider"></TextInput>
    </View>
    <ScrollView className="mt-2 w-full h-[45%]  ">
        <SelectServiceProvider_comp />
   
    </ScrollView>

    <View>
      
    </View>
    

    
    

  
    
</View>
</SafeAreaView>
  )
}

export default SelectServiceProvider