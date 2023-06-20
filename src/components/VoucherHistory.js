import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";


const VoucherHistory = ({ beneficiaryName, pvtOrgName, cost, date, moneyType }) => {
  return (
    <View>
      <View className="h-18 w-11/12 mx-auto mt-3 p-3 rounded-lg flex-row justify-evenly bg-blue-200">
        <View className="pt-4"><Ionicons name="person-remove-outline" size={30}></Ionicons></View>
        <View><Text className="ml-4 font-light text-sm">{beneficiaryName}</Text><Text className="ml-4">{pvtOrgName}</Text><Text className="ml-4 font-light">{date}</Text></View>
        <View><Text className="ml-4 text-right font-light">{(moneyType) ? ("+") : ("-")}{cost}</Text></View>
      </View>
    </View>


  )
};



export default VoucherHistory;