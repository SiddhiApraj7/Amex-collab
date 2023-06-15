import { View, Text, SafeAreaView, TextInput, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import Voucher from '../components/Voucher';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import { useEffect } from 'react';

const E_rupi_wallet = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  // const [vouchers, setVouchers] = useState([]);
  const [voucherObjectList, setVoucherObjectList] = useState([]);
  //const { phoneNumber, setPhoneNumber } = useContext(AppContext);

  useEffect(() => {
    getAvailableVouchers();
  }, []);

  useEffect(() => {
    getAllVouchers();
  }, []);


  async function getAllVouchers() {
    phoneNumber 
    try {
      const response = await axios.post('http://192.168.29.208:3000/available-vouchers', {
        phoneNumber : "+9101"
      });
      // console.log(response.data);
      const vouchersList = response.data.vouchers;
      console.log("voucher list :", vouchersList);

      let voucherList = [];
      vouchersList.forEach((voucher) => {
        let vocherObject = {};
        vocherObject = {
          voucherId: voucher.voucherId,
          voucherAmount: voucher.voucherAmount,
          ServiceProviderUser: voucher.ServiceProviderUser.BusinessName,
          PvtOrgBy: voucher.PvtOrgBy.CompanyName,
          purpose: voucher.ServiceProviderUser.BusinessTag
        };
        voucherList.push(vocherObject);
      });
      setVoucherObjectList(voucherList);
      console.log(voucherList);
      console.log("voucher object list :", voucherObjectList);
    } catch (error) {
      console.error(error);
      console.log(error);
      // Handle error and navigation logic
    }
  }
  const phoneNumber = "+9101";
  async function getAvailableVouchers() {
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


  return (

    <SafeAreaView className="bg-white h-full">
      <View className="flex-col h-full justify-between">
        <View className="items-center  bg-white">


          <Image
            className="h-36 w-96 mt-5"

            source={require('../../assets/e-rupi.png')}></Image>

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



          <View className="mt-5 mb-3">
            <Text className="text-gray-500 font-light">AVAILABLE VOUCHERS</Text>
          </View>
          <ScrollView className=" h-[45%]">

            {voucherObjectList.map((voucher) => (

              <Voucher
                pvtorg={voucher.PvtOrgBy}
                sp={voucher.ServiceProviderUser}
                amount={voucher.voucherAmount}
                purpose={voucher.purpose}
                key={voucher.voucherId}
                voucherId={voucher.voucherId}
              />
            ))}

          </ScrollView>



          {/*                     <View className="mt-5 mb-3">
                      <Text className="text-gray-500 font-light">AVAILABLE VOUCHERS</Text>
                    </View>
                    <ScrollView className="flex-row space-y-10 ">
                      <Voucher name="Ashish Daharwal" company="Infosys" value="400" purpose="Pharmacy"/>
                    </ScrollView> */}

          <View className="mt-5 mb-3">
            <Text className="text-gray-500 font-light">REDEEMED VOUCHERS</Text>
          </View>
          {/* <ScrollView className="flex-row space-y-10 "> */}
            {/* <Voucher /> */}
            {/* <Voucher /> */}
            {/* <Voucher name="Ashish Daharwal" company="Infosys" value="400" purpose="Pharmacy" /> */}
          {/* </ScrollView> */}



        </View>
        <View className="bg-gray-300 rounded-lg pt-1 h-14" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, flex: 1 }}>
          <View className="flex-row gap-10 justify-evenly" >
            <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
            <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
            <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
            <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
          </View>
        </View>
      </View>





    </SafeAreaView>


  )
}



export default E_rupi_wallet;