import { View, Text, SafeAreaView, Image, Button , ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import History from '../components/History';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import { useEffect } from 'react';
import Footer from '../components/Footer';

const E_rupee_wallet = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUserInfo() {
    //const phoneNumber = "+91321";
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
<SafeAreaView className="bg-white h-full">

  <View className="flex-col justify-between h-full">

      <View className="bg-white items-center ">
   
          <Image
             className="h-36 w-52 mt-4"
             source = {require('../../assets/e-rupi.png')}></Image>

       {isLoading ? (
        <View className=" justify-center items-center z-40">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (

          <View >
          <View className="flex-row gap-2 ml-7 w-96 justify-between">
          <View className="flex-row gap-1">
          <Ionicons name="person-circle" size={36}></Ionicons>
            <Text className="font-medium text-lg">{firstName} {lastName}</Text>
          </View>
            
            {/* <Text className="font-light text-sm mr-7">{CompanyName} - {positionInCompany}</Text> */}
            <View className=" mt-3 mr-10">
            <Text className="font-medium text-lg">{bankName}</Text>
            {/* <Text className="font-light text-center">BALANCE:1000e$</Text> */}
            {/* <Text className="font-light text-sm mr-7">{BusinessTag}</Text> */}
            </View>
        </View>

        

             <View><Text className="font-light text-center mt-2 text-sm">BALANCE:</Text></View>
            <View><Text className="font-bold text-lg text-center mt-1 mb-5">1000 e$</Text></View> 

          </View>
        )}

          <View className="flex-row gap-4 items-center">
              <View className="font-light bg-blue-200 rounded-lg w-24 h-15 pl-6 py-4 mr-5 align-center">
                <Ionicons name="enter-outline" size={40}></Ionicons>
                <Text className="pr-2">Recieve </Text>
              </View>
              <View className="font-light bg-indigo-200 rounded-lg w-24 h-15 pl-8 py-4 ml-5 align-center">
                <Ionicons name="exit-outline" size={40}></Ionicons>
                <Text>Send</Text>
              </View>
          </View>

          <View><Text className="font-light text-center mt-10">HISTORY</Text></View>

          <ScrollView className="">

          <View className="mb-56">
            <History name="BHOPAL CATERERS" date="22-05-23" cost="140" color="#F99D96"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
          </View>

          
          </ScrollView>

          

      </View>

          




      {/* <View className="bg-white rounded-lg pt-2 h-14" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, flex: 1 }}>
          <View className="flex-row gap-10 justify-evenly" >
            <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
            <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
            <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
            <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
          </View>
       
        
      </View> */}
      <Footer />
      </View>
  

        
    </SafeAreaView>
  )
}

export default E_rupee_wallet;