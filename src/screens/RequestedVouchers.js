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
const RequestedVouchers = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  // const [vouchers, setVouchers] = useState([]);
  const [activevoucherList, setAvaialbelVoucherList] = useState([]);
  const [redeemedvoucherList, setRedeemedVoucherList] = useState([]);
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRequestedVouchers();
  }, []);

  useEffect(() => {
    getAllVouchers();
  }, []);


  async function getAllVouchers() {
    try {
      const response = await axios.post('http://192.168.1:3000/vouchers-requested',
        { phoneNumber });
      console.log("hdcuhasdcjkskdc", response.data);
      const vouchersList = response.data.vouchers;
      console.log("voucher list :", vouchersList);

      let activevoucherList = [];
      vouchersList.forEach((voucher) => {
        let vocherObject = {};
        if (voucher.voucherRedeemed == false && voucher.voucherId != null && voucher.voucherAmount != null) {
          vocherObject = {
            voucherId: voucher.voucherId,
            voucherAmount: voucher.voucherAmount,
            ServiceProviderUser: voucher.ServiceProviderUser.BusinessName,
            PvtOrgBy: voucher.PvtOrgBy.CompanyName,
            purpose: voucher.ServiceProviderUser.BusinessTag,
            voucherRedeemed: voucher.voucherRedeemed
          };
        }
        activevoucherList.push(vocherObject);
      });
      setAvaialbelVoucherList(activevoucherList);
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
      // console.log("voucher object list :", voucherObjectList);
    } catch (error) {
      console.error(error);
      console.log(error);
      // Handle error and navigation logic
    } finally {
      setIsLoading(false);
    }
  }

  async function getRequestedVouchers() {
    try {
      //const phoneNumber = "+9106";
      const response = await axios.get(`http://192.168.29.164:3000/get-user-info/${phoneNumber}`);
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


  return (

    <SafeAreaView className="bg-white h-full">
      <View className="flex-col h-full justify-between">
        <View className="items-center  bg-white">


          <Image
            className="h-36 w-96 mt-5"

            source={require('../../assets/e-rupi.png')}></Image>
        </View>

        {isLoading ? (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (

          <View className="flex-row gap-2 ml-3 w-96 justify-between">
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

        )}

        <View className="mt-1 mb-3">
          <Text className="text-gray-500 font-bold tracking-widest mx-auto">ALL REQUESTED VOUCHERS</Text>
        </View>

        {isLoading ? (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ScrollView className="h-3/5 ">
            <View className="mt-2 mb-3 border-b-2 border-gray-300 p-1">
              <Text className="text-gray-500 mx-auto font-light">ACTIVE VOUCHERS</Text>
            </View>
            {activevoucherList.length === 0 || (activevoucherList.length === 1 && Object.keys(activevoucherList[0]).length === 0) ? (
              <Text className="text-gray-400 mx-auto font-extralight p-3">No active vouchers</Text>
            ) : (
              activevoucherList.map((voucher, i) => (
                <Voucher
                  pvtorg={voucher.PvtOrgBy}
                  sp={voucher.ServiceProviderUser}
                  amount={voucher.voucherAmount}
                  purpose={voucher.purpose}
                  key={i}
                  voucherId={voucher.voucherId}
                  voucherRedeemed={voucher.voucherRedeemed}
                />
              ))
            )}
            <View className="mt-3 mb-3 border-b-2 border-gray-300 p-1">
              <Text className="text-gray-500 mx-auto font-light">SCANNED VOUCHERS</Text>
            </View>
            {redeemedvoucherList.length === 0 || (redeemedvoucherList.length === 1 && Object.keys(redeemedvoucherList[0]).length === 0) ? (
              <Text className="text-gray-400 mx-auto font-extralight p-3">No scanned vouchers</Text>
            ) : (
              redeemedvoucherList.map((voucher, i) => (
                voucher.voucherId !== null && (
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
        )}
        <Footer />
      </View>
    </SafeAreaView>


  )
}



export default RequestedVouchers;
