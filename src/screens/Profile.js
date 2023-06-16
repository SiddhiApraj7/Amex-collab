import { View, Text, SafeAreaView, Image, Button , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import History from '../components/History';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import { useEffect } from 'react';
import Footer from '../components/Footer';

const Profile = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [BusinessName, setBusinessName] = useState('');
  const [PositionInBusiness, setPositionInBusiness] = useState('');
  const [BusinessTag, setBusinessTag] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [positionInCompany, setPositionInCompany] = useState('');
  const [is_Beneficiary, set_is_Benefiary] = useState(false);
  const [is_PvtOrg, set_is_PvtOrg] = useState(false);
  const [is_serviceProvider, set_is_serviceProvider] = useState(false);
  const [bankAccountHolderName, setBankAccHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  async function fetchUserInfo() {
    //const phoneNumber = "+91321";
    try {
      const response = await axios.get(`http://192.168.29.164:3000/get-user-info/${phoneNumber}`);
      console.log(response.data);
      const user = response.data;
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setBankName(user.bankName);
      set_is_Benefiary(user.isBeneficiary);
      set_is_PvtOrg(user.isPvtOrg);
      set_is_serviceProvider(user.isServiceProvider);
      setBankAccHolderName(user.bankAccountHolderName);
      setAccountNumber(user.accountNumber);
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
  
    if (is_PvtOrg) {
      fetchPvtOrgInfo();
    }
  
    if (is_serviceProvider) {
      fetchSPInfo();
    }
  }, [is_PvtOrg, is_Beneficiary, is_serviceProvider]);
  

  async function fetchSPInfo() {
    
    try {
      const response = await axios.get(`http://192.168.29.164:3000/get-serviceProvider-info/${phoneNumber}`);
      console.log(response.data);
      const serviceProvider = response.data;
      
      setBusinessName(serviceProvider.BusinessName);
      setPositionInBusiness(serviceProvider.PositionInBusiness);
      setBusinessTag(serviceProvider.BusinessTag);
      
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  } 

  async function fetchPvtOrgInfo() {
    //const phoneNumber = "+9196";
    try {
      const response = await axios.get(`http://192.168.29.164:3000/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtorg = response.data;
      setFirstName(pvtorg.Users.firstName);
      setLastName(pvtorg.Users.lastName);
      setBankName(pvtorg.Users.bankName);
      setCompanyName(pvtorg.CompanyName);
      setPositionInCompany(pvtorg.positionInCompany);

    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }
  return (
<SafeAreaView className="bg-white h-full">

  <View className="flex-col justify-between h-full">

      <View className=" items-center ">
   
          <Image
             className="h-36 w-52 mt-4"
             source = {require('../../assets/e-rupi.png')}></Image>

        <View className="bg-indigo-200 h-44 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">
          
                <View className="rounded-full  h-16 w-16 mt-12  mx-5 z-50 shadow-lg items-center  ">
                    <View className="my-auto mx-auto">
                    <Ionicons name="person-circle-outline" size={60} ></Ionicons>
                    </View>
                    
                </View>
                <View className="mr-5 mt-1 my-auto">
                    <View className="" >
                    <Text className="text-right text-gray-700 font-semibold text-xl">{firstName} {lastName}</Text>
                    <Text className="text-right font-medium text-sm text-stone-600">{phoneNumber}</Text>
                    </View>
                    
                    <Text className="text-right font-md text-lg">Roles</Text>
                    <View className>
                        {is_Beneficiary === true && <Text className="text-right text-stone-600">Beneficiary</Text>}
                        {is_PvtOrg ===true && <Text className="text-right text-stone-600">Private Organisation</Text>}
                        {is_serviceProvider === true&& <Text className="text-right text-stone-600">Service Provider</Text>}
                    </View>
                        
                        
             
                    
         

            </View>
        </View>
{is_PvtOrg === true && 

<View className="bg-indigo-200 mt-5  h-30 p-1 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">
          
<View className="rounded-md text-gray-500 h-16 w-16 my-auto mx-5 z-50 shadow-lg items-center  ">
            <View className="my-auto mx-auto text-gray-500">
            <Ionicons name="business-outline" className="text-gray-500" size={60} ></Ionicons>
            </View>
            
        </View>
<View className="mr-5 my-auto">

    <Text className="text-right text-gray-700 font-semibold text-lg">Private Organisation</Text>
    
    <View className="flex-row justify-evenly" >
    <Text className="text-right font-medium text-sm text-stone-600"> {CompanyName}</Text>
    <Text>|</Text>
    <Text className="text-right font-md text-sm text-stone-600"> {positionInCompany}</Text>
    </View>
   
    
   


</View>
</View>
}
        
    {is_serviceProvider === true &&
    
    <View className="bg-indigo-200 mt-5 h-30 p-1 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">
          
    <View className="rounded-md  h-16 tex-gray-400 w-16 my-auto mx-5 z-50 shadow-lg items-center  ">
                <View className="my-auto mx-auto">
                <Ionicons name="business-outline" size={60} ></Ionicons>
                </View>
                
            </View>
    <View className=" mr-5 my-auto">
    
        <Text className="text-right text-gray-700 font-semibold text-xl">Service Provider</Text>
        <View className="flex-row justify-between" >
        <Text className="text-right font-medium text-sm text-stone-600">{BusinessName}</Text>
        <Text>|</Text>
        <Text className="text-right font-medium text-sm text-stone-600">{PositionInBusiness}</Text>
        </View>
        
        <Text className="text-right font-md text-sm text-stone-600">{BusinessTag}</Text>
       
        
       


</View>
</View>
    
    
    }
        

        <View className="bg-indigo-200 mt-5  h-30 p-1 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">
          
                <View className="rounded-md text-gray-500 h-16 w-16 my-auto mx-5 z-50 shadow-lg items-center  ">
                            <View className="my-auto mx-auto text-gray-500">
                            <Ionicons name="card-outline" className="text-gray-500" size={60} ></Ionicons>
                            </View>
                            
                        </View>
                <View className="mr-5 my-auto">
                <View className="" >
                    <Text className="text-right text-gray-700 font-semibold text-xl">Bank Details</Text>
                    <View className="flex-row justify-between">
                    <Text className="text-right font-medium text-sm text-stone-600"> {bankName}</Text>
                    <Text>|</Text>
                    <Text className="text-right font-medium text-sm text-stone-600"> {bankAccountHolderName}</Text>
                    </View>
                    
                    </View>
                    
                    <Text className="text-right font-md text-sm text-stone-600">Account Number : {accountNumber}</Text>
                   
                    
                   
         

            </View>
        </View>

        <TouchableOpacity className="h-24"onPress={() => {navigation.navigate("home")}}>
            <View className="bg-gray-500 p-2 rounded-lg mt-5 "><Text className="text-white">Logout</Text></View>
        </TouchableOpacity>
        

         
      </View>

      

      

          




      <Footer />
      </View>
  

        
    </SafeAreaView>
  )
}

export default Profile;