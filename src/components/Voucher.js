import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";


const Voucher = ({children}) => {
  return (
    <View>
            <View className="w-52 h-40 bg-blue-300 items-center mt-5">
            <Ionicons name="wallet-outline" size={30} className="" ></Ionicons>
            {children}
            </View>
    </View>
    
    
  )
};

export default Voucher;