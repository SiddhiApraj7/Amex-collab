import { View, Text, SafeAreaView, TextInput, Image, Button,ScrollView , StyleSheet,TouchableOpacity} from 'react-native';
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


const ServiceProviderHomePage = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const [BusinessName, setBusinessName] = useState('');
  const [PositionInBusiness, setPositionInBusiness] = useState('');
  const [BusinessTag, setBusinessTag] = useState('');

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
    
    try {
      const response = await axios.get(`http://192.168.29.164:3000/get-serviceProvider-info/${phoneNumber}`);
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
    }
  } 

  // fetchSPInfo();


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
    
        <View >
            <View className="flex-row gap-2 ml-5 w-96 justify-between">
              <View className="flex-row gap-2">
                <Ionicons name="person-circle" size={36}></Ionicons>
                <View className="pb-2">
                <Text className="font-medium text-sm mr-7">{firstName} {lastName}</Text>
                <Text className="font-light text-xs mr-7">{BusinessName} - {PositionInBusiness}</Text>
                </View>
                </View>
                <View className="pt-3 mr-5">
                <Text className="font-medium text-md">{bankName}</Text>
                <Text className="font-light text-xs mr-7">{BusinessTag}</Text>
                </View>
            </View>

            <View className="flex-row ml-10"><Text className="font-light text-sm text-center mt-3">BALANCE: </Text><Text className="font-bold text-lg  text-center mt-1.5">1000 e$</Text></View>
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
            
        </View>


        <View>
            <Text className="font-light text-center mt-6">PAST TRANSACTIONS</Text>
        </View>

        <ScrollView className="h-36">


   {/* redemeed true vouchers  */}
         
            <VoucherHistory name="Anushtha Prakash" date="22-05-23" cost="140" color="#F99D96" purpose="Scholarship"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="BHOPAL CATERERS" date="22-05-23" cost="140" color="#F99D96" purpose="Grocery"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
           
        </ScrollView>
        
            
               
           
        </View>

        
    </View>

    <View className="bg-white rounded-lg pt-1 h-14" style={{position: 'absolute', left:0, right:0, bottom:0, flex:1}}>
          <View className="flex-row gap-10 justify-evenly" >
          <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
          <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
          <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
          <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
          </View>
        
      </View>
    </SafeAreaView>
  )
          }



export default ServiceProviderHomePage;

