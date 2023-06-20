import { View, Text, SafeAreaView, TextInput, Image, Button, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import VoucherHistory from '../components/VoucherHistory';
import { BackHandler } from 'react-native';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import CryptoJS from 'react-native-crypto-js';
import Header from '../components/Header';

const ServiceProviderHomePage = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const [BusinessName, setBusinessName] = useState('');
  const [PositionInBusiness, setPositionInBusiness] = useState('');
  const [BusinessTag, setBusinessTag] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [voucherList, setVoucherList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  useEffect(() => {
    fetchSPInfo();
  }, []);

  async function fetchSPInfo() {
    setIsLoading(true);

    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-serviceProvider-info/${phoneNumber}`);
      console.log(response.data);
      const serviceProvider = response.data;

      let fn = CryptoJS.AES.decrypt(serviceProvider.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln = CryptoJS.AES.decrypt(serviceProvider.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn = CryptoJS.AES.decrypt(serviceProvider.Users.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);

      setBusinessName(serviceProvider.BusinessName);

      let pb = CryptoJS.AES.decrypt(serviceProvider.PositionInBusiness, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setPositionInBusiness(pb.toString(CryptoJS.enc.Utf8));
      console.log(PositionInBusiness);

      setBusinessTag(serviceProvider.BusinessTag);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getAllVouchers() {
    try {
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/vouchers-requested',
        { phoneNumber });
      const vouchersList = response.data.vouchers;

      let voucherList = [];
      vouchersList.forEach((voucher) => {
        if (voucher.voucherRedeemed == true) {
          let vocherObject = {};
          let fn = CryptoJS.AES.decrypt(voucher.BeneficiaryUser.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
          setFirstName(fn.toString(CryptoJS.enc.Utf8));
          console.log(firstName);

          let ln = CryptoJS.AES.decrypt(voucher.BeneficiaryUser.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
          setLastName(ln.toString(CryptoJS.enc.Utf8));
          console.log(lastName);
          vocherObject = {
            beneficiaryName: firstName + " " + lastName,
            cost: voucher.voucherAmount,
            pvtOrgName: voucher.PvtOrgBy.CompanyName,
            date: voucher.voucherRedeemedDate,
            moneyType: voucher.voucherRedeemed
          }
          voucherList.push(vocherObject);
        }

      });
      setVoucherList(voucherList);
      console.log("voucher list :", voucherList);
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }

  useEffect(() => {
    getAllVouchers();
  }, []);
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center bg-white">


        <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>

        {isLoading ? (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (


          <View >

            <Header firstName={firstName} lastName={lastName} bankName={bankName} type="2" businessName={BusinessName} BusinessTag={BusinessTag} positionInBusiness={PositionInBusiness} />



            <View className="flex-row ml-10"><Text className="font-light text-sm text-center mt-3">BALANCE: </Text><Text className="font-bold text-lg  text-center mt-1.5">1000 e$</Text></View>

          </View>
        )}

        <View className="items-center">


          <View className="flex-row gap-4 items-center">

            <TouchableOpacity onPress={() => {
              navigation.navigate("e_rupee_wallet");
            }}>
              <Walletcard children="E-RUPEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate("qrScanner");
            }}>
              <View className="w-42 h-46 mx-0 py-7 pl-6 pr-5 text-center rounded-2xl mt-5 bg-blue-200">
                <View className="my-auto align-center">
                  <Ionicons name="qr-code-outline" size={42} ></Ionicons>
                  <Text className=" text-xs">Scan QR</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate("requestedVouchers");
            }}>
              <View className="w-42 h-46 mx-0 py-5 pl-6 pr-5 text-center rounded-2xl mt-5 bg-blue-200">
                <View className="my-auto align-center">
                  <Ionicons name="file-tray-full-outline" size={42} ></Ionicons>
                  <Text className=" text-xs">Voucher</Text>
                  <Text className="text-xs">Requests</Text>
                </View>
              </View>
            </TouchableOpacity>


          </View>

          <View className=" mb-3 border-b-2 border-gray-300 p-1">
            <Text className="text-gray-500 font-bold tracking-widest text-center mt-6">PAST TRANSACTIONS</Text>
          </View>


          <ScrollView className="h-auto">
            {voucherList.length === 0 || (voucherList.length === 1 && Object.keys(voucherList[0]).length === 0) ? (
              <Text className="text-gray-400  font-extralight p-3 text-center">No Transactions</Text>
            ) : (
              voucherList.map((voucher, i) => (
                (voucher.moneyType == true) && (<VoucherHistory
                  beneficiaryName={voucher.beneficiaryName}
                  pvtOrgName={voucher.pvtOrgName}
                  cost={voucher.cost}
                  purpose={voucher.purpose}
                  key={i}
                  date={voucher.date}
                  moneyType={voucher.moneyType}
                />)
              ))
            )}

          </ScrollView>
        </View>
      </View>
      <Footer disableDashboardButton={true} />
    </SafeAreaView>
  )
}



export default ServiceProviderHomePage;

