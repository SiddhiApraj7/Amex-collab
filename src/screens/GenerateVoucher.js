import { View, Text, SafeAreaView, Image, Button , ScrollView, TextInput, Alert} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState, useEffect } from "react";
import Number_input_ud from "../components/Number_input_ud.js"
import { useForm, Controller } from "react-hook-form";




const GenerateVoucher = () => {

  const [BusinessTag, setBusinessTag] = useState('');
  const [BusinessName, setBusinessName] = useState('');
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const [error,setError] = useState('');
 //const { phoneNumber, setPhoneNumber } = useContext(AppContext);
 const phoneNumber = "+9196";
 const {serviceProviderChoice, setserviceProviderChoice} = useContext(AppContext);
 
  async function fetchUserInfo() {
    
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
    fetchUserInfo();
  }, []);

  async function fetchSPInfo(phoneNumber) {
    
    try {
      const response = await axios.get(`http://192.168.1.45:3000/get-serviceProvider-info/${phoneNumber}`);
      console.log(response.data);
      const serviceProvider = response.data;
      // setFirstName(serviceProvider.Users.firstName);
      // setLastName(serviceProvider.Users.lastName);
      // setBankName(serviceProvider.Users.bankName);
      // setBusinessName(serviceProvider.BusinessName);
      // setPositionInBusiness(serviceProvider.PositionInBusiness);
      setBusinessTag(serviceProvider.BusinessTag);
      setBusinessName(serviceProvider.BusinessName);
      
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
    if (serviceProviderChoice) {
      fetchSPInfo(serviceProviderChoice);
    }
  }, [serviceProviderChoice]); 


  const createVoucher = async (data) => {
    console.log(phoneNumber);
    console.log(data.amount);
    console.log(data.phoneNumberB);
    console.log(serviceProviderChoice);
    

     try {
      
      const response = await axios.post("http:/192.168.1.45:3000/create-voucher", {
      voucherAmount : parseInt(data.amount), 
      PhoneNumberSP : serviceProviderChoice, 
      PhoneNumberB : data.phoneNumberB, 
      PhoneNumberPvtOrg : phoneNumber, 
      voucherRedeemed : false
        
      });
      console.log(response.data);
      Alert.alert("Voucher has been created!");
      setTimeout(() => {
        setError('');
        navigation.navigate('pvtOrgHomePage'); // Replace 'Login' with the name of your login screen
      }, 2000); 
  
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-52 "
    
    source = {require('../../assets/e-rupi.png')}></Image>
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
    <View className="mt-5">
    <Text className="font-bold text-lg p-1 mb-2">Generate Voucher</Text>
    </View>

    <View className="bg-blue-300 h-4/5 w-full rounded-lg">
        <View className="px-5 py-3 flex-col gap-1">
            <Text className="font-bold text-sm">Phone Number of Beneficiary</Text>
            {/* <NumberInput className="bg-gray-100 w-full h-10 rounded-lg p-2" placeholder="Enter phone Number">
              
            </NumberInput> */}
            <Number_input_ud
              placeholder="ex. +917766"
              secureTextEntry={true}
              keyboardType="phone-pad"
              name="phoneNumberB"
              control={control}
            />
        </View>

        <View className="px-5 py-1 flex-col gap-1">
            <Text className="font-bold text-sm">Validity</Text>
            <Number_input_ud
              placeholder="ex. 23-10-23"
              secureTextEntry={true}
              keyboardType="phone-pad"
              name="validity"
              control={control}
            />
        </View>

        <View className="px-5 py-1 flex-col gap-2">
            <Text className="font-bold text-sm">Amount in e₹</Text>
            <Number_input_ud
              placeholder="ex. 100"
              secureTextEntry={true}
              keyboardType="phone-pad"
              name="amount"
              control={control}
            />
        </View>

        <View className="mx-28 py-2  mt-1 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Search Service Provider" onPress={() => {
              navigation.navigate("selectServiceProvider");
            }}/></View>
        <View className="p-3">
        <Text className="font-bold mb-2 text-sm">Service Provider Name</Text>
          <View className="p-2 bg-gray-100 rounded-lg w-full h-10">
          
          <Text className="font-semibold mx-auto ">{serviceProviderChoice ? BusinessName: 'Selected Service Provider'}</Text>
          
          </View></View>

        <View className="text-center items-center">
        
        </View>
        
        <View>
       
            <View className="flex-row gap-5 items-center mx-auto"> 
                <Text className="text-lg mx-auto"> Select Tag</Text>

                <View className="bg-gray-100 h-8 w-1/3 rounded-lg" ><Text className="font-semibold mx-auto my-auto">{serviceProviderChoice ? BusinessTag : 'No Tag Selected'}</Text></View>
            </View>
            
        </View>

        <View className="mx-28 py-4  mb-1  mt-1 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Make Request" onPress={handleSubmit(createVoucher)}/></View>

        
    </View>
    

  
    
</View>
</SafeAreaView>
  )
}

export default GenerateVoucher