import { View, Text , TextInput, Image, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import NumberInput from '../components/NumberInput';
import {useForm,Controller} from "react-hook-form";
import { useState,useRef } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const BankDetails = () => {

    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();
    const [value, setValue] = useState(null);
    //const [isFocus, setIsFocus] = useState(false);


    const [accNumber, setaccNumber] = useState(null);
    const [accHolderName, setaccHolderName] = useState(' ');
    const [bankName, setBankName] = useState('');

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

    const onDetailsPress = (data) => {
      console.log(data);
      console.warn('bank details entered')
    }

  return (
    <SafeAreaView className="bg-white h-full">
            <View className="items-center  bg-white">

            
            <Image
            className="h-36 w-96 mt-5"
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">Bank Details</Text>

            <View className = "h-full w-full bg-blue-300 rounded-t-3xl"> 

            <Text className="text-center mt-12 mb-3 font-semibold text-lg"> Enter your details: </Text>
            
            <View className="flex-col pl-10 gap-5">
                  <NumberInput
                  placeholder="Account Number"
                  value = {accNumber}
                  setValue = {setaccNumber}
                  secureTextEntry={true}
                  keyboardType="phone-pad"
                  name = "accountNumber"
                  control = {control}
                  />

                <View>
                <Dropdown
                  data={banks}
                  search
                  className="bg-white h-11 w-64 p-2 font-light ml-8 rounded-lg"
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={value}
                  onChange={item => {
                      setValue(item.value);
                  }}
                  
                />
                </View>
                  
                  
                  <NumberInput
                  placeholder="Account Holder Name"
                  value = {accHolderName}
                  setValue = {setaccHolderName}
                  secureTextEntry={true}
                  keyboardType="default"
                  name="accHolderName"
                  control = {control}
                />
           
            </View>
            
            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
                  <Button color = "#82E0AA" onPress={() => {
                    handleSubmit(onDetailsPress);
                    navigation.navigate("pinRegister");
                  }}title="Next"></Button>
                  </View>
            </View>

            </View>
        </SafeAreaView>
  )
}

export default BankDetails;