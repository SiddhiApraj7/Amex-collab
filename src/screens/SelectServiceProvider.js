import { View, Text, SafeAreaView, Image, Button , TextInput, ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";

const SelectServiceProvider = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);

  async function fetchUserInfo(phoneNumber) {
    //const phoneNumber = "+91321";
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

  fetchUserInfo(phoneNumber);

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
              <View className="pb-2">
                <Text className="font-medium text-lg mr-7">{firstName} {lastName}</Text>
                {/* <Text className="font-light text-sm mr-7">Infosys - HR Head</Text> */}
              </View>
            </View>
            <View className="pt-1 mr-5">
              <Text className="font-medium text-lg">{bankName}</Text>
            </View>
          </View>
          </View>
          
    <View className="mt-5">
    <Text className="font-bold text-xl p-1 mb-2">Select Service Provider</Text>
    </View>

    <View className="bg-gray-200 h-10 w-full flex-row space-x-6 mx-auto">
        <View className="p-1 ml-5"><Ionicons name="search-outline" size={28}></Ionicons></View>
        <TextInput placeholder="Search Service Provider"></TextInput>
    </View>


    <ScrollView className="mt-2 w-full  ">
        <View className="p-2 bg-white border-2  h-18 mx-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <View className="flex-row"> 
                <Text className="text-xs font-medium p-1">Name :</Text><Text className="font-light text-xs p-1"> Govt. Pension Scheme</Text>
                </View>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>

            
    </View>
    </ScrollView>
    

    
    

  
    
</View>
</SafeAreaView>
  )
}

export default SelectServiceProvider