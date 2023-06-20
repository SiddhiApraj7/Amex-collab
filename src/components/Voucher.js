import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Voucher = ({ pvtorg, amount, sp, purpose, voucherId, voucherRedeemed }) => {
  const navigation = useNavigation();


  const handleVoucherClick = () => {
    navigation.navigate('voucherQR', { voucherId, voucherRedeemed });
  };



  return (
    <TouchableOpacity className="bg-blue-200 w-80 mx-auto p-2 rounded-lg my-1" onPress={handleVoucherClick}>
      <View className="flex-row justify-between">
        <Ionicons name="qr-code-outline" size={50}></Ionicons>
        <View className="text-white text-xs">
          <Text className=" font-bold tracking-widest">{pvtorg}</Text>
          <View className="flex-row gap-2">
            <Text>{sp}</Text>
            <Text className="font-extralight text-neutral-500">{purpose}</Text>
          </View>

          <Text className="font-extralight text-neutral-500">{amount}e₹</Text>

        </View>
      </View>
    </TouchableOpacity>


  )
};

export default Voucher;