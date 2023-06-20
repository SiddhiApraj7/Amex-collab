import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";


const Walletcard = ({children}) => {

  return (
    <View className="">
            <View className="w-38 h-46 mx-0 py-5 pl-5 pr-5 text-center rounded-2xl mt-5 bg-indigo-200">
              <View className="my-auto align-center">
              <Ionicons name="wallet-outline" size={56} ></Ionicons>
              </View>
              <Text className="text-xs">{children}</Text>
            </View>
    </View>
    
    
  )
}

export default Walletcard;