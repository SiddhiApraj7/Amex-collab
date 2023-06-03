import { View, Text , TextInput, Image, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
const PinRegister = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 "
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">PIN Registration</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl">

              <Text className="text-center mt-14  mb-1 font-semibold text-lg"> Enter 4 digit PIN: </Text>
            <View className="bg-white flex-row gap-2 mx-16 mt-4 mb-2 pt-1.5 pb-4 align-middle items-center rounded-lg">
              <TextInput required value={Number} maxLength={4} keyboardType="number-pad" className=" text-center pl-6 mt-1 text-sm font-semibold" placeholder="Enter your pin"/>
            </View>

            <Text className="text-center mt-10  mb-1 font-semibold text-lg"> Re-enter PIN: </Text>
            <View className="bg-white flex-row gap-2 mx-16 mt-4 mb-2 pt-1.5 pb-4 align-middle items-center rounded-lg">
              <TextInput required value={Number} maxLength={4} keyboardType="number-pad" className=" text-center pl-6 mt-1 text-sm font-semibold" placeholder="Re-enter your pin"/>
            </View>

            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl"><Button onPress={() => {
              navigation.navigate("selectRole");
            }} className="text-black text-center" color = "#82E0AA" title="Submit"></Button></View>


            
            </View>
            
        </View>
        </SafeAreaView>
    
  )
}

export default PinRegister;