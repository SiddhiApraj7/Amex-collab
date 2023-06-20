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
import CryptoJS from 'react-native-crypto-js';
import Header from '../components/Header';

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
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/vouchers-created',
        { phoneNumber });
      console.log(response.data);
      const vouchersList = response.data.vouchers;

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
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }

  async function getRequestedVouchers() {
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-user-info/${phoneNumber}`);
      console.log(response.data);
      const user = response.data;
      let fn = CryptoJS.AES.decrypt(user.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln = CryptoJS.AES.decrypt(user.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn = CryptoJS.AES.decrypt(user.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);
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
            className="h-14 w-1/2 mt-10 mb-9"

            source={require('../../assets/e-rupi.png')}></Image>

          <Header firstName={firstName} lastName={lastName} bankName={bankName} type="1" />



          <View className="mt-3 mb-3 items-center">
            <Text className="text-gray-500 font-bold tracking-widest">ALL GENERATED VOUCHERS</Text>
          </View>
          <ScrollView className="h-3/5 mb-14">
            <View className="mt-2 mb-3 border-b-2 border-gray-300 p-1 items-center">
              <Text className="text-gray-500  font-light">ACTIVE VOUCHERS</Text>
            </View>
            {activevoucherList.length === 0 || (activevoucherList.length === 1 && Object.keys(activevoucherList[0]).length === 0) ? (
              <Text className="text-gray-400  font-extralight p-3 items-center text-center">No active vouchers</Text>
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
              <Text className="text-gray-400  font-extralight p-3 items-center text-center">No redeemed vouchers</Text>
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
