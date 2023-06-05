import { View, Text, SafeAreaView, TextInput, Image, Button,ScrollView , StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import Voucher from '../components/Voucher';

const E_rupi_wallet = () => {
  const navigation = useNavigation();
    
  return (
   
        <SafeAreaView className="bg-white h-full">
          <View className="flex-col h-full justify-between">
                <View className="items-center  bg-white">
          
              
                    <Image
                    className="h-36 w-96 mt-5"
                    
                    source = {require('../../assets/e-rupi.png')}></Image>

                <View className="flex-row gap-2  mx-auto rounded-lg p-2">
                   <Ionicons name="person-circle" size={36}></Ionicons>
                   <Text className="p-1 font-medium text-lg">Sahil Kumar</Text>
                </View>
                    
                    
                    
                    <View className="mt-5 mb-3">
                      <Text className="text-gray-500 font-light">AVAILABLE VOUCHERS</Text>
                    </View>
                    <ScrollView className="flex-row space-y-10 ">
                      <Voucher name="Ashish Daharwal" company="Infosys" value="400" purpose="Pharmacy"/>
                    </ScrollView>

                    <View className="mt-5 mb-3">
                      <Text className="text-gray-500 font-light">REDEEMED VOUCHERS</Text>
                    </View>
                    <ScrollView className="flex-row space-y-10 ">
                      <Voucher name="Ashish Daharwal" company="Infosys" value="400" purpose="Pharmacy"/>
                    </ScrollView>



                </View>
                <View className="bg-gray-300 p-2 rounded-lg ">
                    <View className="flex-row gap-10 mx-auto text-center p-1 ml-0" >
                          <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
                          <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
                          <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
                          <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
                     </View>
      </View>
  </View>



          
        
    </SafeAreaView>
    
    
  )
}



export default E_rupi_wallet;

