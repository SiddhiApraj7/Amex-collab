import { View, Text , TextInput, Image, SafeAreaView, Button} from 'react-native'
import React from 'react'
import {logo} from "../assets/e-rupi.png";
import { useNavigation } from "@react-navigation/native";
const PinRegister = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 "
            
            source = {require('../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">PIN Registration</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl">

              <Text className="text-center mt-12  mb-1 font-semibold text-lg"> Enter 4 digit PIN: </Text>

            <View className="bg-white flex-row gap-2 my-4 mx-16 pt-1.5 pb-4 px-7 align-middle rounded-lg">
              <View className="bg-gray-400 h-10 w-10 align-middle rounded-sm">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
              <View className="bg-gray-400 h-10 w-10 align-middle rounded-sm">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
              <View className="bg-gray-400 h-10 w-10 align-middle rounded-sm">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
              <View className="bg-gray-400 h-10 w-10 rounded-sm align-middle">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
            </View>

            <Text className="text-center mt-12  mb-1 font-semibold text-lg"> Re-enter PIN: </Text>

            <View className="bg-white flex-row gap-2 my-4 mx-16 pt-1.5 pb-4 px-7 align-middle rounded-lg">
              <View className="bg-gray-400 h-10 w-10 align-middle rounded-sm">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
              <View className="bg-gray-400 h-10 w-10 align-middle rounded-sm">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
              <View className="bg-gray-400 h-10 w-10 align-middle rounded-sm">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
              <View className="bg-gray-400 h-10 w-10 rounded-sm align-middle">
              <TextInput value={Number} keyboardType="number-pad" className="text-center mt-1 text-lg font-semibold" placeholder=" . "/>
              </View>
            </View>

            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl"><Button onPress={() => {
              navigation.navigate("userDetails");
            }} className="text-black text-center" color = "#82E0AA" title="Submit"></Button></View>


            
            </View>
            
        </View>
        </SafeAreaView>
    
  )
}

export default PinRegister;