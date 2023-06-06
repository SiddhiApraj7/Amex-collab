import { View, Text, TextInput, SafeAreaView, Button, Image, ScrollView } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const UserDetails = () => {
    const navigation = useNavigation();
        return (

          <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 mt-5"
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">User Details</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl"> 

            <Text className="text-center mt-12  mb-1 font-semibold text-lg"> Enter your details: </Text>
            <View className="flex-col pl-12 gap-5">
            <View className="flex-row gap-4">
                <Ionicons name="person-circle-outline" color="white" className="top-6" size={40}></Ionicons>
              <TextInput className="bg-white mt-16 p-2 h-11 w-56 mx-14 font-light rounded-md" placeholder="Enter your First Name"/>
            </View>
            <View className="flex-row gap-4">
            <Ionicons name="person-circle-outline" color="white" className="top-6" size={40}></Ionicons>
              <TextInput className="bg-white mt-4 h-11 mx-14 p-2 w-56 font-light rounded-md" placeholder="Enter your Last Name"/>
            </View>

            <View className="flex-row gap-4">
            <Ionicons name="mail-outline" color="white" className="top-6" size={40}></Ionicons>
              <TextInput className="bg-white mt-4 h-11 mx-14 p-2 w-56 font-light rounded-md" placeholder="Enter Recovery E-mail"/>
            </View>

            </View>
            
            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
                  <Button color = "#82E0AA" onPress={() => {
                    navigation.navigate("bankDetails");
                  }}title="Next"></Button>
                  </View>
            </View>

            </View>
        </SafeAreaView>
    
        
    
    )
                }

export default UserDetails;