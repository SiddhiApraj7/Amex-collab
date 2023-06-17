import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
/* import { AppContext } from "../../AppContext";
import { useContext } from "react"; */
import { useNavigation } from '@react-navigation/native';


// voucher redemed prop 

const Voucher = ({pvtorg, amount, sp, purpose,voucherId,voucherRedeemed}) => {
  const navigation = useNavigation();


  const handleVoucherClick = () => {
    navigation.navigate('voucherQR', { voucherId, voucherRedeemed });
  };



  return (
    // <View className="flex-row justify-evenly gap-20">
        <TouchableOpacity  className="bg-blue-200 w-80 mx-auto p-2 rounded-lg my-1" onPress={handleVoucherClick}>
      <View className="flex-row justify-between">
      <Ionicons name="qr-code-outline" size={50}></Ionicons>
          <View className="text-white text-xs">
            <Text className=" font-bold tracking-widest">{pvtorg}</Text>
            <View className="flex-row gap-2">
            <Text>{sp}</Text>
            {/* <Text>{key}</Text> */}
            <Text className="font-extralight text-neutral-500">{purpose}</Text>
            </View>
           
            <Text className="font-extralight text-neutral-500">{amount}e₹</Text>
            
          </View>
      </View>
      </TouchableOpacity>
      // </View>
    
    
  )
};

export default Voucher;