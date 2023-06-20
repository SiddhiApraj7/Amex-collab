import { View, Text, SafeAreaView, TextInput, Image, Button, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
    try {
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/available-vouchers', {
        phoneNumber: phoneNumber
      });
      const vouchersList = response.data.vouchers;

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

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getAvailableVouchers(phoneNumber) {
    try {
      
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-user-info/${phoneNumber}`);
      console.log(response.data);
      const user = response.data;

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

      )}



    </SafeAreaView>


  )
}



export default E_rupi_wallet;