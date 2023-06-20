import { View, Text, SafeAreaView, Image, Button , TextInput, ScrollView, ActivityIndicator} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import SelectServiceProvider_comp from '../components/serviceProvider_info';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState, useEffect } from "react";
import GenerateVoucher from './GenerateVoucher';
import CryptoJS from 'react-native-crypto-js';
import Header from '../components/Header';

const SelectServiceProvider = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const {serviceProviderChoice, setserviceProviderChoice} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUserInfo(phoneNumber) {
    
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtorg = response.data;
      let fn  = CryptoJS.AES.decrypt(pvtorg.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln  = CryptoJS.AES.decrypt(pvtorg.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn  = CryptoJS.AES.decrypt(pvtorg.Users.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);
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

  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>


    {isLoading ? (
        <View className=" justify-center items-center z-40">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (

          <Header firstName={firstName} lastName={lastName} bankName={bankName} type="1"/>

        )}
          
        <View className="mt-4 mb-3">
          <Text className="text-gray-500 font-bold tracking-widest mx-auto">SEARCH SERVICE PROVIDER</Text>
        </View>

    

    <View className="bg-gray-200 h-10 w-full flex-row space-x-6 mx-auto">
        <View className="p-1 ml-5"><Ionicons name="search-outline" size={28}></Ionicons></View>
        <TextInput placeholder="Search Service Provider"></TextInput>
    </View>
    {isLoading ? (
            <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
    <ScrollView className="mt-2 w-full h-[51%]  ">
        <SelectServiceProvider_comp />
   
    </ScrollView>
          )}

    <View className="mx-28 p-4 mb-10  mt-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Select" onPress={() => navigation.navigate("generateVoucher")}/></View>

    <View>
      
    </View>
    
</View>
</SafeAreaView>
  )
}

export default SelectServiceProvider