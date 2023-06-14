import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
/* import { AppContext } from "../../AppContext";
import { useContext } from "react"; */


const Voucher = (pvtorg, amount, key, sp, purpose) => {
  // const [vouchers, setVouchers] = useState([]);

  // useEffect(() => {
   
  // }, []);



  return (
    <View>
        <TouchableOpacity /* onPress={() => handleProviderClick(index, provider.Users.phoneNumber)} */>
      <View className="bg-blue-200 w-full mx-auto p-2 rounded-lg my-3">
        <View className="flex-row justify-center gap-20">
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
          
        </View>
      </View>
      </TouchableOpacity>
      </View>
    
    
  )
};

export default Voucher;