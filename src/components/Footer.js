import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons";
const Footer = ({ disableDashboardButton = false }) => {
    const navigation = useNavigation();
  return (
    <View className="bg-white rounded-lg pt-1 h-14 border-t-2 border-neutral-200" style={{position: 'absolute', left:0, right:0, bottom:0, flex:1}}>
          <View className="flex-row gap-10 justify-evenly" >
          <TouchableOpacity onPress={() => {navigation.goBack();}} disabled={disableDashboardButton}  className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs text-black">Dashboard</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("selectRole")}} className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text  className="text-xs">Select Role</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate("profile")}} className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></TouchableOpacity>
          </View>
        
      </View>
  )
}

export default Footer