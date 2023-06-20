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

const PvtOrgHomePage = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [positionInCompany, setPositionInCompany] = useState('');
  const [voucherList, setVoucherList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/vouchers-created',
        { phoneNumber });
      // console.log("hdcuhasdcjkskdc",response.data);
      const vouchersList = response.data.vouchers;
      // console.log("voucher list :", vouchersList);

      let voucherList = [];
      vouchersList.forEach((voucher) => {
        if(voucher.voucherRedeemed==true){
        let vocherObject = {};
        let fn  = CryptoJS.AES.decrypt(voucher.BeneficiaryUser.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
        setFirstName(fn.toString(CryptoJS.enc.Utf8));
        console.log(firstName);

        let ln  = CryptoJS.AES.decrypt(voucher.BeneficiaryUser.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
        setLastName(ln.toString(CryptoJS.enc.Utf8));
        console.log(lastName);
          vocherObject = {
            beneficiaryName : firstName + " " + lastName,
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
      // Handle error and navigation logic
    }
  }



  async function fetchPvtOrgInfo() {
    //const phoneNumber = "+9196";
    setIsLoading(true);
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtorg = response.data;
      /* setFirstName(pvtorg.Users.firstName);
      setLastName(pvtorg.Users.lastName);
      setBankName(pvtorg.Users.bankName);
      setCompanyName(pvtorg.CompanyName);
      setPositionInCompany(pvtorg.positionInCompany); */

      let fn  = CryptoJS.AES.decrypt(pvtorg.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln  = CryptoJS.AES.decrypt(pvtorg.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn  = CryptoJS.AES.decrypt(pvtorg.Users.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);

      setCompanyName(pvtorg.CompanyName);
      

      let pb  = CryptoJS.AES.decrypt(pvtorg.positionInCompany, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setPositionInCompany(pb.toString(CryptoJS.enc.Utf8));
      console.log(positionInCompany);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchPvtOrgInfo(phoneNumber);
  }, []);
  useEffect(() => {
    getAllVouchers();
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
            className="h-14 w-1/2 mt-10 mb-9"
            
            source = {require('../../assets/e-rupi.png')}></Image>

    {isLoading ? (
        <View className=" justify-center items-center z-40">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (

    <View >
        {/* <View className="flex-row gap-2 ml-5 w-96 justify-between"> */}
          <Header firstName={firstName} lastName={lastName} bankName={bankName} companyName={CompanyName} positionInCompany={positionInCompany} type="3" />
        </View>

        )}

        <View className="items-center">


        <View className="flex-row gap-4 items-center">

        <TouchableOpacity onPress={() => {
          navigation.navigate("e_rupee_wallet");
        }}>
        <Walletcard children="E-RUPEE"/>
        </TouchableOpacity>


         <TouchableOpacity onPress={() => {
          // setserviceProviderChoice(null);
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
        <TouchableOpacity onPress={() => {
              navigation.navigate("voucherGenerated");
            }}>
             <View className="w-42 h-46 mx-0 py-5 pl-6 pr-5 text-center rounded-2xl mt-5 bg-blue-200">
              <View className="my-auto align-center">
              <Ionicons name="file-tray-full-outline" size={42} ></Ionicons>
              <Text className=" text-xs">Voucher</Text>
              <Text className="text-xs">Generated</Text>
              </View>
              </View>
            </TouchableOpacity>  

       </View>
        
    


    <View className=" mb-3 border-b-2 border-neutral-200 p-1">
        <Text className="text-gray-500 font-bold tracking-widest text-center mt-6">PAST TRANSACTIONS</Text>
    </View>


    <ScrollView clasName="h-20">
    {voucherList.length === 0 || (voucherList.length === 1 && Object.keys(voucherList[0]).length === 0) ? (
              <Text className="text-gray-400  font-extralight p-3 text-center">No Transactions</Text>
            ) : (
              voucherList.map((voucher, i) => (
                (voucher.moneyType==true)&&(<VoucherHistory
                  beneficiaryName={voucher.beneficiaryName}
                  pvtOrgName={voucher.pvtOrgName}
                  cost={voucher.cost}
                  purpose={voucher.purpose}
                  key={i}
                  date={voucher.date}
                  moneyType={!(voucher.moneyType)}
                />)
              ))
            )}

    </ScrollView>
    
        
           
       
    </View>

    
</View>

 {/* <View className=" bg-white rounded-lg pt-2 h-14" style={{position: 'absolute', left:0, right:0, bottom:0, flex:1}}>
      <View className="flex-row gap-10 justify-evenly" >
      <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
      <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
      <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
      <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
      </View>
    
  </View>  */}

  <Footer disableDashboardButton={true}/>
</SafeAreaView>
    )
}



export default PvtOrgHomePage;

