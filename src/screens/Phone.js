import { View, Text, SafeAreaView, Button, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
const Phone = () => {

    const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-96 "
    
    source = {require('../assets/e-rupi.png')}></Image>
    
    <Text className="font-bold text-xl p-3 mb-5">Login</Text>

    <View className = "h-full w-full bg-blue-300 rounded-t-3xl">
      <Text className="text-center mt-20  mb-1 font-semibold text-lg"> Enter your Phone Number: </Text>
    <View className="bg-white flex-row gap-2 m-16 pt-1.5 pb-4 rounded-lg">
      <TextInput required value={Number} maxLength={10} keyboardType="number-pad" className="  pl-3 mt-1 text-sm font-semibold" placeholder="Verify your phone number"/>
    </View>

    <View className="mx-28 p-4 mb-10 rounded-2xl"><Button onPress={() => {
        navigation.navigate("userDetails");
    }}className="text-black text-center" color = "#82E0AA" title="Submit"></Button></View>
    
    </View>
    
</View>
</SafeAreaView>
  )
}

export default Phone;