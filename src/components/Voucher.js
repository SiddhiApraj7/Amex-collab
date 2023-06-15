import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
/* import { AppContext } from "../../AppContext";
import { useContext } from "react"; */
import { useNavigation } from '@react-navigation/native';


const Voucher = ({pvtorg, amount, sp, purpose,voucherId}) => {
  const navigation = useNavigation();


  const handleVoucherClick = () => {
    navigation.navigate('voucherQR', { voucherId });
  };



  return (
    <View className="flex-row justify-evenly gap-20">
        <TouchableOpacity  className="bg-blue-200 w-80 mx-auto  p-2 rounded-lg my-3 " onPress={handleVoucherClick}>
      {/* <View className="bg-blue-200 w-80 mx-auto  p-2 rounded-lg my-3"> */}
      
          <Ionicons name="qr-code-outline" size={50}></Ionicons>
          <View className="text-white text-xs">
            <Text>{pvtorg}</Text>
            <View className="flex-row gap-2">
            <Text>{sp}</Text>
            {/* <Text>{key}</Text> */}
            <Text>{purpose}</Text>
            </View>
           
            <Text>{amount}e₹</Text>
            
          </View>
          
     
      {/* </View> */}
      </TouchableOpacity>
      </View>
    
    
  )
};

export default Voucher;