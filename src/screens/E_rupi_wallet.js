import { View, Text, SafeAreaView, TextInput, Image, Button, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import Voucher from '../components/Voucher';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import { useEffect } from 'react';
import Footer from '../components/Footer';
import CryptoJS from 'react-native-crypto-js';
import Header from '../components/Header';


const E_rupi_wallet = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  // const [vouchers, setVouchers] = useState([]);
  const [availablevoucherList, setAvaialbelVoucherList] = useState([]);
  const [redeemedvoucherList, setRedeemedVoucherList] = useState([])
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    getAvailableVouchers(phoneNumber);
  }, []);

  useEffect(() => {
    getAllVouchers(phoneNumber);
  }, []);


  async function getAllVouchers(phoneNumber) {
    //phoneNumber = "+9101";
    try {
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/available-vouchers', {
        phoneNumber: phoneNumber
      });
      // console.log(response.data);
      const vouchersList = response.data.vouchers;
      // console.log("voucher list :", vouchersList);

      let availablevoucherList = [];
      vouchersList.forEach((voucher) => {
        let vocherObject = {};
        if (voucher.voucherRedeemed == false  && voucher.voucherId != null && voucher.voucherAmount != null) {
          vocherObject = {
            voucherId: voucher.voucherId,
            voucherAmount: voucher.voucherAmount,
            ServiceProviderUser: voucher.ServiceProviderUser.BusinessName,
            PvtOrgBy: voucher.PvtOrgBy.CompanyName,
            purpose: voucher.ServiceProviderUser.BusinessTag,
            voucherRedeemed: voucher.voucherRedeemed
          };
        }
        availablevoucherList.push(vocherObject);
      });
      setAvaialbelVoucherList(availablevoucherList);


      let redeemedvoucherList = [];
      vouchersList.forEach((voucher) => {
        let vocherObject = {};
        if (voucher.voucherRedeemed == true && voucher.voucherId != null && voucher.voucherAmount != null) {
          vocherObject = {
            voucherId: voucher.voucherId,
            voucherAmount: voucher.voucherAmount,
            ServiceProviderUser: voucher.ServiceProviderUser.BusinessName,
            PvtOrgBy: voucher.PvtOrgBy.CompanyName,
            purpose: voucher.ServiceProviderUser.BusinessTag,
            voucherRedeemed: voucher.voucherRedeemed
          };
        }
        redeemedvoucherList.push(vocherObject);
      });
      setRedeemedVoucherList(redeemedvoucherList);
      console.log("available voucher list :", availablevoucherList);
      console.log("redeemed voucher list :", redeemedvoucherList);
      // console.log(voucherList);
      // console.log("voucher object list :", voucherObjectList);
    } catch (error) {
      console.error(error);
      console.log(error);
      // Handle error and navigation logic
    } finally {
      setIsLoading(false);
    }
  }
  // const phoneNumber = "+9101";
  async function getAvailableVouchers(phoneNumber) {
    try {
      //phoneNumber= "+9101"
      
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
      /* alert(error);
      setError('User already exists, please login.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login'); // Replace 'Login' with the name of your login screen
      }, 3000); */ // Redirect to login screen after 3 seconds
    } 
  }


  return (

    <SafeAreaView className="bg-white h-full">

      {isLoading ? (
        <View className=" justify-center items-center mt-72">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (

      <View className="flex-col h-full justify-between">
        <View className="items-center  bg-white">


        <Image
            className="h-14 w-1/2 mt-10 mb-9"
            
            source = {require('../../assets/e-rupi.png')}></Image>

      

          <View>
            <Header firstName={firstName} lastName={lastName} bankName={bankName} type="1"/>
          </View>

          

          <View className="mt-1 mb-3">
            <Text className="text-gray-500 font-bold tracking-widest">ALL VOUCHERS</Text>
          </View>
          <ScrollView className="h-4/6 mb-14">
            <View className="mt-2 mb-3 border-b-2 border-gray-300 p-1 items-center">
              <Text className="text-gray-500  font-light ">AVAILABLE VOUCHERS</Text>
            </View>


            {availablevoucherList.length === 0 || (availablevoucherList.length === 1 && Object.keys(availablevoucherList[0]).length === 0) ? (
              <Text className="text-gray-400  font-extralight p-3">No available vouchers</Text>
            ) : (
              availablevoucherList.map((voucher, i) => (
                (voucher.voucherRedeemed == false && voucher.voucherId != null && voucher.voucherAmount != null) && (
                <Voucher
                  pvtorg={voucher.PvtOrgBy}
                  sp={voucher.ServiceProviderUser}
                  amount={voucher.voucherAmount}
                  purpose={voucher.purpose}
                  key={i}
                  voucherId={voucher.voucherId}
                  voucherRedeemed={voucher.voucherRedeemed}
                />
                )
              ))
            )}


            <View className="mt-3 mb-3 border-b-2 border-gray-300 p-1 items-center">
              <Text className="text-gray-500 font-light">REDEEMED VOUCHERS</Text>
            </View>
            {/* <ScrollView className="flex-row space-y-10 "> */}

            

            {redeemedvoucherList.length === 0 || (redeemedvoucherList.length === 1 && Object.keys(redeemedvoucherList[0]).length === 0) ? (
              <Text className="text-gray-400  font-extralight p-3 items-center">No redeemed vouchers</Text>
            ) : (
              redeemedvoucherList.map((voucher, i) => (
                (voucher.voucherRedeemed == true && voucher.voucherId != null && voucher.voucherAmount != null) && (
                  <Voucher
                    pvtorg={voucher.PvtOrgBy}
                    sp={voucher.ServiceProviderUser}
                    amount={voucher.voucherAmount}
                    purpose={voucher.purpose}
                    key={i}
                    voucherId={voucher.voucherId}
                    voucherRedeemed={voucher.voucherRedeemed}
                  />
                )
              )))
            }


          </ScrollView>

          {/* </ScrollView> */}



        </View>
        {/* <View className=" bg-white rounded-lg pt-2 h-14" style={{position: 'absolute', left:0, right:0, bottom:0, flex:1}}>
      <View className="flex-row gap-10 justify-evenly" >
      <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
      <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
      <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
      <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
      </View>
    
  </View>  */}
  <Footer />
      </View>

      )}



    </SafeAreaView>


  )
}



export default E_rupi_wallet;