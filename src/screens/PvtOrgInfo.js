import { View, Text, TextInput, SafeAreaView, Button, Image, ActivityIndicator } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Number_input_ud from "../components/Number_input_ud"
import { useForm } from "react-hook-form";
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import CryptoJS from 'react-native-crypto-js';


const PvtOrgInfo = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);


  const updatePvtOrg = async (data) => {
    console.log(data);
    setIsLoading(true);

    let cipherPositionInCompany = CryptoJS.AES.encrypt(data.positionInCompany, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu").toString();
    console.log(cipherPositionInCompany);

    try {
      const response = await axios.post("https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-pvtOrg", {
        phoneNumber: phoneNumber,
        CompanyName: data.CompanyName,
        positionInCompany: cipherPositionInCompany,
      });
      if (response.status === 200) {
        console.log('pvtOrg account created successfully');
        console.log(response.data);
        navigation.navigate('pvtOrgHomePage');
      } else {
        console.log('Failed to create private org');
      }
    } catch (error) {
      console.log('Error creating pvtOrg account:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">
        <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>

        <Text className="font-bold text-xl p-3 mb-5">Private Organization Details</Text>

        <View className="h-full w-full bg-blue-300 rounded-t-3xl">
          <Text className="text-center mt-12  mb-1 font-semibold text-lg">
            {" "}
            Enter following details:{" "}
          </Text>


          <View className="flex-col gap-5 mt-3">
            <View className="flex-row gap-4">
              <View className="pl-12">
                <Ionicons
                  name="briefcase-outline"
                  color="white"
                  className="top-6"
                  size={40}
                ></Ionicons>
              </View>
              <View className="ml-2">
                <Number_input_ud
                  name="CompanyName"
                  control={control}
                  secureTextEntry={false}
                  placeholder="Enter your Company Name"
                  keyboardType="default"
                />
              </View>
            </View>


            <View className="flex-row gap-4">
              <View className="pl-12">
                <Ionicons
                  name="person-circle-outline"
                  color="white"
                  className="top-6"
                  size={40}
                ></Ionicons>
              </View>
              <View className="ml-2">
                <Number_input_ud
                  name="positionInCompany"
                  control={control}
                  secureTextEntry={false}
                  placeholder="Enter your Position in Company"
                  keyboardType="default"
                />
              </View>
            </View>


          </View>

          <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
            <Button
              color="#82E0AA"
              onPress={handleSubmit(updatePvtOrg)}
              title="Next"
            ></Button>
          </View>

          {isLoading && (
            <View className=" justify-center items-center z-40">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

        </View>
      </View>
    </SafeAreaView>
  );
};

export default PvtOrgInfo;
