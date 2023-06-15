import { View, Text, SafeAreaView, TextInput, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
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
import Voucher from '../components/Voucher';



const PvtOrgHomePage = () => {
  
useEffect(() => {
  getAllVouchers();
}, []);
  const navigation = useNavigation();
  //const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [positionInCompany, setPositionInCompany] = useState('');
  const [voucherObjectList, setVoucherObjectList] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Prevent going back by returning true
        return true;
      };

      // Add event listener for the back button press
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Remove event listener when the component is unfocused or unmounted
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  async function getAllVouchers() {

    try {
      const response = await axios.post('http://192.168.29.208:3000/vouchers-created', {
        phoneNumber : "+9196"
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
  async function fetchPvtOrgInfo() {
   const phoneNumber = "+9196"
    try {
      const response = await axios.get(`http://192.168.29.208:3000/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtorg = response.data;
      setFirstName(pvtorg.Users.firstName);
      setLastName(pvtorg.Users.lastName);
      setBankName(pvtorg.Users.bankName);
      setCompanyName(pvtorg.CompanyName);
      setPositionInCompany(pvtorg.positionInCompany);

    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }


  useEffect(() => {
    fetchPvtOrgInfo();
  }, []);




  const textrupi = (

    <Text className="text-xs"> E-RUPI</Text>
  )
  const textrupee = (

    <Text className="text-xs" >E-RUPEE</Text>
  )
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center bg-white">


        <Image
          className="h-36 w-52 "

          source={require('../../assets/e-rupi.png')}></Image>

        <View >
          {/* <View className="flex-row gap-2 ml-5 w-96 justify-between"> */}
          <View className="flex-row gap-2 ml-7 w-96 justify-between">
            <Ionicons name="person-circle" size={36}></Ionicons>
            <View className="pb-2">
              <Text className="font-medium text-lg mr-7">{firstName} {lastName}</Text>
              <Text className="font-light text-sm mr-7">{CompanyName} - {positionInCompany}</Text>
            </View>
            <View className="pt-1 mr-10">
              <Text className="font-medium text-lg">{bankName}</Text>
              <Text className="font-light text-center">BALANCE:1000e$</Text>
              {/* <Text className="font-light text-sm mr-7">{BusinessTag}</Text> */}
            </View>
          </View>

          {/* <View><Text className="font-light text-center mt-5">TOTAL BALANCE</Text></View>
        <View><Text className="font-bold text-xl text-center mt-3 mb-3">1000 e$</Text></View> */}
          {/* </View> */}

          <View className="items-center">


            <View className="flex-row gap-4 items-center">

              <TouchableOpacity onPress={() => {
                navigation.navigate("e_rupee_wallet");
              }}>
                <Walletcard children={textrupee} />
              </TouchableOpacity>


              <TouchableOpacity onPress={() => {
                navigation.navigate("generateVoucher");
              }}>
                <View className="w-38 h-46 mx-0 py-5 pl-5 pr-5 text-center rounded-2xl mt-5  bg-blue-200">
                  <View className="my-auto align-center">
                    <Ionicons name="create-outline" size={42} ></Ionicons>
                    <Text className=" text-xs">Generate</Text>
                    <Text className="text-xs">Voucher</Text>
                  </View>
                </View>
              </TouchableOpacity>

            </View>

          </View>


          <View>
            <Text className="font-light text-center mt-4">VOUCHERS CREATED</Text>
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

          {/* <VoucherHistory name="Anushtha Prakash" date="22-05-23" cost="140" color="#F99D96" purpose="Scholarship"/>
        <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
        <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
        <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
        <VoucherHistory name="BHOPAL CATERERS" date="22-05-23" cost="140" color="#F99D96" purpose="Grocery"/>
        <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
        <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
        <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>

   
    
         */}


        </View>


      </View>

      {/* <View className="bg-gray-300 rounded-lg pt-1 h-14" style={{position: 'absolute', left:0, right:0, bottom:0, flex:1}}>
      <View className="flex-row gap-10 justify-evenly" >
      <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
      <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
      <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
      <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
      </View>
    
  </View> */}
    </SafeAreaView>
  )
}



export default PvtOrgHomePage;

