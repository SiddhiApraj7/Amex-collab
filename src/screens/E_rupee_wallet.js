import { View, Text, SafeAreaView, Image, Button , ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import History from '../components/History';


const E_rupee_wallet = () => {
  return (
<SafeAreaView className="bg-white h-full">

  <View className="flex-col justify-between h-full">

      <View className="bg-white items-center ">
   
          <Image
             className="h-36 w-52 mt-4"
             source = {require('../../assets/e-rupi.png')}></Image>

          <View className="flex-row">
            <View className="flex-row gap-2  mx-auto rounded-lg px-1">
                <Ionicons name="person-circle" size={36}></Ionicons>
                <View>
                   <Text className="p-1 font-medium text-lg">Sahil Kumar</Text>
                   <Text className ="ml-2 mb-4">AMEX</Text>
                </View>
            </View>

            <View><Text className="font-light text-center mt-2 text-sm ml-9">BALANCE:</Text></View>
            <View><Text className="font-bold text-lg text-center mt-1 mb-5">1000 e$</Text></View>

          </View>

          <View className="flex-row gap-4 items-center">
              <View className="font-light bg-blue-200 rounded-lg w-24 h-15 pl-6 py-4 mr-5 align-center">
                <Ionicons name="enter-outline" size={40}></Ionicons>
                <Text className="pr-2">Recieve </Text>
              </View>
              <View className="font-light bg-indigo-200 rounded-lg w-24 h-15 pl-8 py-4 ml-5 align-center">
                <Ionicons name="exit-outline" size={40}></Ionicons>
                <Text>Send</Text>
              </View>
          </View>

          <View><Text className="font-light text-center mt-10">HISTORY</Text></View>

          <View className="">
            <History name="BHOPAL CATERERS" date="22-05-23" cost="140" color="#F99D96"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
            <History name="Tanisha Daharwal" date="17-03-23" cost="200" color="#A1F7BA"/>
          </View>

      </View>

          




      <View className="bg-gray-300 rounded-lg pt-1 ">
        <View className="flex-row gap-10 justify-evenly" >
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

export default E_rupee_wallet;