import { View, Text, TextInput, Image, SafeAreaView, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import NumberInput from '../components/NumberInput';
import { useForm, Controller } from "react-hook-form";
import { useState, useRef } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { AppContext } from '../../AppContext';
import axios from 'axios';
import { useContext } from "react";


const BankDetails = () => {
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const banks = [
    { label: 'Axis Bank', value: '1' },
    { label: 'Bank of Baroda', value: '2' },
    { label: 'Canara Bank', value: '3' },
    { label: 'HDFC Bank', value: '4' },
    { label: 'ICICI Bank', value: '5' },
    { label: 'Indian Bank', value: '6' },
    { label: 'IndusInd Bank', value: '7' },
    { label: 'Kotak Mahindra Bank', value: '8' },
    { label: 'Punjab National Bank', value: '9' },
    { label: 'State Bank of India', value: '10' },
    { label: 'Union Bank of India', value: '11' },
  ];
  const [value, setValue] = useState(null);


  const updateUser = async (data) => {
    
    console.log(phoneNumber);
    console.log(value);
    console.log(data);
    setIsLoading(true);

     try {
      
      const response = await axios.patch("http://192.168.1.45:3000/create-user", {
        phoneNumber: phoneNumber,
        bankAccountHolderName : data.accHolderName,
        accountNumber : data.accountNumber,
        bankName : value,
        
      });
      console.log(response.data);
      navigation.navigate('pinRegister');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">


        <Image
          className="h-36 w-96 mt-5"

          source={require('../../assets/e-rupi.png')}></Image>

        <Text className="font-bold text-xl p-3 mb-5">Bank Details</Text>

        <View className="h-full w-full bg-blue-300 rounded-t-3xl">

          <Text className="text-center mt-12 mb-3 font-semibold text-lg"> Enter your details: </Text>

          <View className="flex-col pl-10 gap-5">
            <NumberInput
              placeholder="Account Number"
              secureTextEntry={true}
              keyboardType="phone-pad"
              name="accountNumber"
              control={control}
            />

            <View>
              <Dropdown
                data={banks}
                search
                className="bg-white h-11 w-64 p-2 font-light ml-8 rounded-lg"
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Bank"
                searchPlaceholder="Search..."
                onChange={item => {
                  
                  setValue(item.label);

                }}

              />
            </View>


            <NumberInput
              placeholder="Account Holder Name"
              secureTextEntry={false}
              keyboardType="default"
              name="accHolderName"
              control={control}
            />

          </View>

          <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
            <Button color="#82E0AA" onPress={handleSubmit(updateUser)} title="Next"></Button>
          </View>

          {isLoading && (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}

        </View>

      </View>
    </SafeAreaView>
  )
}

export default BankDetails;