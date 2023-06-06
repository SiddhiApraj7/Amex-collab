import { View, Text, SafeAreaView, TextInput, Image, Button,ScrollView , StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import VoucherHistory from '../components/VoucherHistory';


const PvtOrgHomePage = () => {
  const navigation = useNavigation();
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
            <View className="flex-row gap-2  mx-auto bg-gray-200 rounded-lg p-2">
                <Ionicons name="person-circle" size={36}></Ionicons>
                <Text className="px-1 pt-1 pb-2 font-medium text-lg">Sahil Kumar</Text>
            </View>

            <View><Text className="font-light text-center mt-5">TOTAL BALANCE</Text></View>
            <View><Text className="font-bold text-xl text-center mt-3 mb-3">1000 e$</Text></View>

            <View className="items-center">


            <View className="flex-row gap-4 items-center">

            <TouchableOpacity onPress={() => {
              navigation.navigate("e_rupee_wallet");
            }}>
            <Walletcard children={textrupee}/>
            </TouchableOpacity>


             <TouchableOpacity onPress={() => {
              navigation.navigate("generateVoucher");
            }}>
             <View className="w-42 h-46 mx-0 py-5 pl-6 pr-5 text-center rounded-2xl mt-5 bg-blue-200">
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
            <Text className="font-light text-center mt-6">PAST TRANSACTIONS</Text>
        </View>

        <ScrollView>

         <View className="">
            <VoucherHistory name="Anushtha Prakash" date="22-05-23" cost="140" color="#F99D96" purpose="Scholarship"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="BHOPAL CATERERS" date="22-05-23" cost="140" color="#F99D96" purpose="Grocery"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            <VoucherHistory name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA" purpose="Pharmaceutical"/>
            </View>
        </ScrollView>
        
            
               
           
        </View>

        
    </View>

    <View className="bg-gray-300 h-36 mt-20 rounded-lg">
        <View className="flex-row gap-10 mx-auto text-center p-1 ml-0" >
          <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
          <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
          <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
          <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
        </View>
        
      </View>
    </SafeAreaView>
  )
          }



export default PvtOrgHomePage;

