import { View, Text, SafeAreaView, Image, Button , TextInput, ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const SelectServiceProvider = () => {
  return (
    <SafeAreaView className="bg-white h-full">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-96 mt-5"
    
    source = {require('../../assets/e-rupi.png')}></Image>
    <View className="flex-row justify-evenly gap-20">
        <View>
        <Ionicons name="people-circle-outline" size={40}></Ionicons>
        </View>
        <View className="text-center items-center">
        <Text className="font-bold text-lg">Infosys</Text>
        <Text>AMEX</Text>
        </View>
        <View className="p-2">
            <Ionicons name="arrow-back-circle-outline" size={30}></Ionicons>
        </View>
        
    </View>
    <View className="mt-5">
    <Text className="font-bold text-xl p-1 mb-2">Select Service Provider</Text>
    </View>

    <View className="bg-gray-200 h-10 w-full flex-row space-x-6 mx-auto">
        <View className="p-1 ml-5"><Ionicons name="search-outline" size={28}></Ionicons></View>
        <TextInput placeholder="Search Service Provider"></TextInput>
    </View>
    <ScrollView className="mt-2 w-full  ">
        <View className="p-2 bg-white border-2  h-18 mx-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <View className="flex-row"> 
                <Text className="text-xs font-medium p-1">Name :</Text><Text className="font-light text-xs p-1"> Govt. Pension Scheme</Text>
                </View>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>

    <View className="p-2 bg-white border-2  h-18 m-1">
            <View className="flex-row my-auto gap-5">
              <Image className="h-12 w-12"
    
    source = {require('../../assets/pension-vector-icon.jpg')}>

              </Image>
              <View className="bg-white h-18">
                <Text className="text-xs font-medium p-1">Business Name : Govt. Pension Scheme</Text>
                <Text className="text-xs font-medium p-1">BusinessTag : PENSION</Text>
              </View>
            </View>
    </View>
    </ScrollView>
    

    
    

  
    
</View>
</SafeAreaView>
  )
}

export default SelectServiceProvider