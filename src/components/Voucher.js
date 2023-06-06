import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";


const Voucher = ({name, company, value, purpose}) => {
  return (
    <View>
      <View className="bg-blue-200 w-[350] mx-2 p-2 rounded-lg my-3">
        <View className="flex-row justify-center gap-20">
          <Ionicons name="qr-code-outline" size={50}></Ionicons>
          <View className="text-white text-xs">
            <Text>{company}</Text>
            <View className="flex-row gap-2">
            <Text>{name}</Text>
            <Text>|</Text>
            <Text>{purpose}</Text>
            </View>
           
            <Text>{value}e₹</Text>
            
          </View>
          
        </View>
      </View>
      </View>
    
    
  )
};

export default Voucher;