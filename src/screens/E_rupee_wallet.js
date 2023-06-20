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
import CryptoJS from 'react-native-crypto-js';
import Header from '../components/Header';

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
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-user-info/${phoneNumber}`);
      console.log(response.data);
      const user = response.data;
      /* setFirstName(user.firstName);
      setLastName(user.lastName);
      setBankName(user.bankName); */

      let fn  = CryptoJS.AES.decrypt(user.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln  = CryptoJS.AES.decrypt(user.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn  = CryptoJS.AES.decrypt(user.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
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
    fetchUserInfo();
  }, []);

  return (
<SafeAreaView className="bg-white h-full">

  <View className="flex-col justify-between h-full">

      <View className="bg-white items-center ">
   
      <Image
            className="h-14 w-1/2 mt-10 mb-9"
            
            source = {require('../../assets/e-rupi.png')}></Image>

       {isLoading ? (
        <View className=" justify-center items-center z-40">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (

          <View >
          <Header firstName={firstName} lastName={lastName} bankName={bankName} type="1"/>

        

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


            <View className="mt-2 mb-3 border-b-2 border-gray-300 p-1 items-center">
              <Text className="text-gray-500 mx-auto font-light">TRANSACTION HISTORY</Text>
            </View>


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

          
      <Footer />
      </View>
  

        
    </SafeAreaView>
  )
}

export default E_rupee_wallet;