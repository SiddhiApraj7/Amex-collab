import { View, Text, SafeAreaView, TextInput, Image, Button } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import Voucher from '../components/Voucher'

const BeneficiaryVoucher = () => {

    
  return (
    <SafeAreaView className="bg-white h-full">
        <View className="items-center  bg-white">

        
        <Image
        className="h-36 w-96 mt-2"
        
        source = {require('../../assets/e-rupi.png')}></Image>
        
        <View>
            <View className="flex-row gap-5 mb-6">
                <Ionicons name="person-circle" size={30}></Ionicons>
                <Text>Sahil Kumar</Text>
                <Text></Text>
            </View>

            <View className="mb-4">
                <Text className="font-light">AVAILABLE VOUCHERS</Text>
            </View>

            <View></View>

            <Voucher/>
            
        </View>

        
    </View>
    </SafeAreaView>
  )
}

export default BeneficiaryVoucher;