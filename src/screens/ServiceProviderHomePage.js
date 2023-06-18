import { View, Text, SafeAreaView, TextInput, Image, Button,ScrollView , StyleSheet,TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useNavigation ,useFocusEffect } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import VoucherHistory from '../components/VoucherHistory';
import { BackHandler } from 'react-native';
import { AppContext } from "../../AppContext";
import { useContext, useState} from "react";
import axios from 'axios';
import { useEffect } from 'react';
import Footer from '../components/Footer';

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
        // Prevent going back by returning true
        return true;
      };

      // Add event listener for the back button press
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Remove event listener when the component is unfocused or unmounted
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  useEffect(() => {
    // Fetch user data and check role status
    fetchSPInfo();
  }, []);

  async function fetchSPInfo() {
    setIsLoading(true);
    
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-serviceProvider-info/${phoneNumber}`);
      console.log(response.data);
      const serviceProvider = response.data;
      setFirstName(serviceProvider.Users.firstName);
      setLastName(serviceProvider.Users.lastName);
      setBankName(serviceProvider.Users.bankName);
      setBusinessName(serviceProvider.BusinessName);
      setPositionInBusiness(serviceProvider.PositionInBusiness);
      setBusinessTag(serviceProvider.BusinessTag);
      
    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  } 

  // fetchSPInfo();

  async function getAllVouchers() {
    try {
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/vouchers-requested',
        { phoneNumber });
      // console.log("hdcuhasdcjkskdc",response.data);
      const vouchersList = response.data.vouchers;
      // console.log("voucher list :", vouchersList);

      let voucherList = [];
      vouchersList.forEach((voucher) => {
        if(voucher.voucherRedeemed==true){
        let vocherObject = {};
          vocherObject = {
            beneficiaryName : voucher.BeneficiaryUser.Users.firstName + " " + voucher.BeneficiaryUser.Users.lastName,
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
            className="h-36 w-52 mt-4"
            
            source = {require('../../assets/e-rupi.png')}></Image>

      {isLoading ? (
        <View className=" justify-center items-center z-40">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
        ) : (
          
          
        <View >
           <View className="flex-row gap-2 ml-7 w-96 justify-between bg-neutral-100 p-2 rounded-lg mx-auto">
            <Ionicons name="person-circle" size={36}></Ionicons>
            <View className="pb-2">
            <Text className="font-medium text-lg mr-7">{firstName} {lastName}</Text>
            <Text className="font-light text-sm mr-7">{BusinessName} - {PositionInBusiness}</Text>
            </View>
            <View className=" mr-10">
            <Text className="font-medium text-lg">{bankName}</Text>
            <Text className="font-light text-center">{BusinessTag}</Text>
            </View>
        </View>

            

            <View className="flex-row ml-10"><Text className="font-light text-sm text-center mt-3">BALANCE: </Text><Text className="font-bold text-lg  text-center mt-1.5">1000 e$</Text></View>

            </View>
            )}

            <View className="items-center">


            <View className="flex-row gap-4 items-center">

            <TouchableOpacity onPress={() => {
              navigation.navigate("e_rupee_wallet");
            }}>
            <Walletcard children={textrupee}/>
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
                (voucher.moneyType==true)&&(<VoucherHistory
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

    {/* <View className="bg-white rounded-lg pt-1 h-14" style={{position: 'absolute', left:0, right:0, bottom:0, flex:1}}>
          <View className="flex-row gap-10 justify-evenly" >
          <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
          <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
          <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
          <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
          </View>
        
      </View> */}
      <Footer disableDashboardButton={true}/>
    </SafeAreaView>
  )
          }



export default ServiceProviderHomePage;

