import { View, Text, SafeAreaView, Image, Button , ScrollView, TextInput, Alert, ActivityIndicator} from 'react-native'
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
 const { phoneNumber, setPhoneNumber } = useContext(AppContext);
 const [isLoading, setIsLoading] = useState(true);
 const [isValidB, setisValidB] = useState(false);

 const {serviceProviderChoice, setserviceProviderChoice} = useContext(AppContext);
 async function checkValidBeneficiary(phoneNumber) {
  setIsLoading(true);
  try {
    const response = await axios.get(`http://192.168.29.164:3000/get-user-info/${phoneNumber}`);
    console.log(response.data);
    const user = response.data;
    return user.isBeneficiary;
  } catch (error) {
    console.error(error);
    return false; // Return false if an error occurs
  } finally {
    setIsLoading(false);
  }
}


  async function fetchUserInfo(phoneNumber) {
    
    try {
      const response = await axios.get(`http://192.168.29.208:3000/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtOrg = response.data;
      setFirstName(pvtOrg.Users.firstName);
      setLastName(pvtOrg.Users.lastName);
      setBankName(pvtOrg.Users.bankName);
    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

 

  useEffect(() => {
    fetchUserInfo(phoneNumber);
  }, []);

  async function fetchSPInfo(phoneNumber) {
    
    try {
      const response = await axios.get(`http://192.168.29.208:3000/get-serviceProvider-info/${phoneNumber}`);
      console.log(response.data);
      const serviceProvider = response.data;
      setBusinessTag(serviceProvider.BusinessTag);
      setBusinessName(serviceProvider.BusinessName);
      
    } catch (error) {
      console.error(error);
      console.log(error);
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
    setIsLoading(true);
  
    const isValidBeneficiary = await checkValidBeneficiary(data.phoneNumberB);
  
    if (isValidBeneficiary) {
      try {
        const response = await axios.post("http:/192.168.29.208:3000/create-voucher", {
          voucherAmount: parseInt(data.amount),
          PhoneNumberSP: serviceProviderChoice,
          PhoneNumberB: data.phoneNumberB,
          PhoneNumberPvtOrg: phoneNumber,
          voucherRedeemed: false
        });
        console.log(response.data);
        Alert.alert("Voucher has been created!");
        setTimeout(() => {
          setError('');
          navigation.navigate('pvtOrgHomePage'); // Replace 'Login' with the name of your login screen
        }, 2000);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert("Beneficiary doesn't exist");
      setTimeout(() => {
        setError('');
        navigation.navigate('generateVoucher'); // Replace 'Login' with the name of your login screen
      }, 3000);
      setIsLoading(false); // Set isLoading to false in the else block as well
    }
  };
  

  
  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-52 "
    
    source = {require('../../assets/e-rupi.png')}></Image>


   {isLoading ? (
        <View className=" justify-center items-center z-40">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (

          
        <View>
        <View className="flex-row gap-2 ml-7 w-96 justify-between bg-neutral-100 p-2 border-b-2 border-neutral-200">
          <View className="flex-row gap-1">
          <Ionicons name="person-circle" size={36}></Ionicons>
            <Text className="font-normal text-lg ">{firstName} {lastName}</Text>
          </View>
            <View className=" mt-3 mr-10">
            <Text className="font-extralight text-lg">{bankName}</Text>

            </View>
        </View>
        </View>

        )}


    <View className="mt-2">
    <Text className="font-bold text-lg p-1 mb-2">Generate Voucher</Text>
    </View>

    <View className="bg-blue-300 h-4/5 w-full rounded-lg">
        <View className="px-5 py-3 flex-col gap-1">
            <Text className="font-bold text-sm">Phone Number of Beneficiary</Text>
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

        {isLoading && (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )} 
        
    </View>
    

  
    
</View>
</SafeAreaView>
  )
}

export default GenerateVoucher