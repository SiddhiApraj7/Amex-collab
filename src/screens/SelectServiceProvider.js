import { View, Text, SafeAreaView, Image, Button , TextInput, ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import SelectServiceProvider_comp from '../components/serviceProvider_info';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState, useEffect } from "react";
import GenerateVoucher from './GenerateVoucher';

const SelectServiceProvider = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const {serviceProviderChoice, setserviceProviderChoice} = useContext(AppContext);
  //console.log("aa");
  //console.log(serviceProviderChoice);

  async function fetchUserInfo(phoneNumber) {
    
    try {
      const response = await axios.get(`http://192.168.1.45:3000/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtOrg = response.data;
      setFirstName(pvtOrg.Users.firstName);
      setLastName(pvtOrg.Users.lastName);
      setBankName(pvtOrg.Users.bankName);
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
    fetchUserInfo(phoneNumber);
  }, []);

  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-96 mt-5"
    
    source = {require('../../assets/e-rupi.png')}></Image>
    <View >
    <View className="flex-row gap-2 ml-7 w-96 justify-between">
            <Ionicons name="person-circle" size={36}></Ionicons>
            <View className="pb-2">
            <Text className="font-medium text-lg mr-7">{firstName} {lastName}</Text>
            {/* <Text className="font-light text-sm mr-7">{CompanyName} - {positionInCompany}</Text> */}
            </View>
            <View className=" mr-10">
            <Text className="font-medium text-lg">{bankName}</Text>
            {/* <Text className="font-light text-center">BALANCE:1000e$</Text> */}
            {/* <Text className="font-light text-sm mr-7">{BusinessTag}</Text> */}
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
    <ScrollView className="mt-2 w-full h-[51%]  ">
        <SelectServiceProvider_comp />
   
    </ScrollView>

    <View className="mx-28 p-4 mb-10  mt-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Select" onPress={() => navigation.navigate("generateVoucher")}/></View>

    <View>
      
    </View>
    

    
    

  
    
</View>
</SafeAreaView>
  )
}

export default SelectServiceProvider