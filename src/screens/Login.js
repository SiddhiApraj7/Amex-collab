import { View, Text , TextInput, Image, SafeAreaView, Button} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 "
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">Login</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl">
              <Text className="text-center mt-20  mb-1 font-semibold text-lg"> Enter 4 digit PIN: </Text>
            <View className="bg-white flex-row gap-2 m-16 pt-1.5 pb-4 align-middle items-center rounded-lg">
              <TextInput required value={Number} maxLength={4} keyboardType="number-pad" className=" text-center pl-6 mt-1 text-sm font-semibold" placeholder="Enter your pin"/>
            </View>

            <View className="mx-28 p-4 mb-10 rounded-2xl"><Button className="text-black text-center" color = "#82E0AA" title="Submit"></Button></View>

            </View>
            
        </View>
        </SafeAreaView>
    
  )
}

export default Login;