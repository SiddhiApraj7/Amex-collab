import {View,Text,TextInput,SafeAreaView,Button, Image,ScrollView, ActivityIndicator} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Number_input_ud from "../components/Number_input_ud"
import { useForm, Controller } from "react-hook-form";
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import CryptoJS from "react-native-crypto-js";


const ServiceProviderInfo = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [value, setValue] = useState(null);
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const businessTagData = [
    { label: 'HOSPITALITY', value: '1' },
    { label: 'BUSINESS', value: '2' },
    { label: 'PENSION', value: '3' },
    { label: 'AGRICULTURE', value: '4' },
    { label: 'HOUSEHOLD_UTILITIES', value: '5' },
    { label: 'CHILDCARE', value: '6' },
    { label: 'OTHER', value: '7' },
  ];

  const updateServiceProvider = async (data) => {
    console.log(data);
    setIsLoading(true);
    console.log(phoneNumber);

    let cipherPositionInBusiness = CryptoJS.AES.encrypt(data.PositionInBusiness,"xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu").toString();
    console.log(cipherPositionInBusiness);

     try {
      const response = await axios.post("https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-serviceProvider", {
        phoneNumber: phoneNumber,  
        BusinessName: data.BusinessName,
        PositionInBusiness: cipherPositionInBusiness,
        BusinessTag: value,
      });
      if (response.status === 200) {
        console.log('ServiceProvider created successfully');
        console.log(response.data);
        navigation.navigate('serviceProviderHomePage');
      } else {
        console.log('Failed to create ServiceProvider');
      }
    } catch (error) {
      console.log('Error creating ServiceProvider:', error);
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

        <Text className="font-bold text-xl p-3 mb-5">Service Provider Details</Text>

        <View className="h-full w-full bg-blue-300 rounded-t-3xl">
          <Text className="text-center mt-12  mb-1 font-semibold text-lg">
            {" "}
            Enter following details:{" "}
          </Text>


          <View className="flex-col gap-5 mt-3">
            <View className=" flex-row gap-4">
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
                  control={control}
                  name="BusinessName"
                  secureTextEntry={false}
                  placeholder="Enter your Business Name"
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
              <View>
                <Number_input_ud
                  control={control}
                  name="PositionInBusiness"
                  secureTextEntry={false}
                  placeholder="Enter your Position in business:"
                  keyboardType="default"
                />
              </View>
            </View>


            <View className="pl-12 mt-5">
              <Dropdown
                data={businessTagData}
                search
                className="bg-white h-11 w-64 p-2 font-light ml-8 rounded-lg mt-5    "
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Tag"
                searchPlaceholder="Search..."
                onChange={item => {
                  setValue(item.label);
                }}

              />
            </View>

          </View>

          <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
            <Button
              color="#82E0AA"
              onPress={handleSubmit(updateServiceProvider)}
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

export default ServiceProviderInfo;
