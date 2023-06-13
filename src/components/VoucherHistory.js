import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";


const VoucherHistory = ({name,cost,date,color,moneyType,purpose}) => {
  return (
    <View>
            <View style={{backgroundColor: color}}className="h-18 w-[85%] mx-auto mt-3 p-2 rounded-lg flex-row justify-evenly">
              <View className="pt-4"><Ionicons name="person-remove-outline" size={30}></Ionicons></View>
              <View><Text className="ml-4 font-light text-sm">{purpose}</Text><Text className="ml-4">{name}</Text><Text className="ml-4 font-light">{date}</Text></View>
              <View><Text className="ml-4 text-right font-light"> {moneyType}{cost}</Text></View>
            </View>
    </View>
    
    
  )
};



export default VoucherHistory;