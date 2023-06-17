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
import Footer from '../components/Footer';
const VoucherGenerated = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  // const [vouchers, setVouchers] = useState([]);
  const [activevoucherList, setAvaialbelVoucherList] = useState([]);
  const [redeemedvoucherList, setRedeemedVoucherList] = useState([]);
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);

  useEffect(() => {
    getRequestedVouchers();
  }, []);

  useEffect(() => {
    getAllVouchers();
  }, []);


  async function getAllVouchers() {
    try {
      const response = await axios.post('http://192.168.1.45:3000/vouchers-created',
      {phoneNumber});
      console.log(response.data);
      const vouchersList = response.data.vouchers;
    //   console.log("voucher list :", vouchersList);

      let activevoucherList = [];
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
    }
  }

  async function getRequestedVouchers() {
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
    }
  }


  return (

    <SafeAreaView className="bg-white h-full">
      <View className="flex-col h-full justify-between">
        <View className="items-center  bg-white">


          <Image
            className="h-36 w-96 mt-5"

            source={require('../../assets/e-rupi.png')}></Image>

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



        <View className="mt-1 mb-3 items-center">
            <Text className="text-gray-500 font-bold tracking-widest">ALL GENERATED VOUCHERS</Text>
          </View>
          <ScrollView className="h-3/5 ">
            <View className="mt-2 mb-3 border-b-2 border-gray-300 p-1 items-center">
              <Text className="text-gray-500  font-light">ACTIVE VOUCHERS</Text>
            </View>
            {activevoucherList.length === 0 || (activevoucherList.length === 1 && Object.keys(activevoucherList[0]).length === 0) ? (
              <Text className="text-gray-400  font-extralight p-3 items-center">No active vouchers</Text>
            ) : (
              activevoucherList.map((voucher, i) => (
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




        </View>
       <Footer />
      </View>





    </SafeAreaView>


  )
}



export default VoucherGenerated;
