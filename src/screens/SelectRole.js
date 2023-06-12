import { View, Text, SafeAreaView, Image, TextInput, Button } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const SelectRole = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isPvtOrg, setIsPvtOrg] = useState(false);

  useEffect(() => {
    // Fetch user data and check role status
    fetchUserRole();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Prevent going back by returning true
        return true;
      };

      // Add event listener for the back button press
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Remove event listener when the component is unfocused or unmounted
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  const createBeneficiary = async () => {
    try {
      const response = await axios.post('http://192.168.29.164:3000/create-beneficiary', {
        phoneNumber: phoneNumber
      });
  
      if (response.status === 200) {
        console.log('Beneficiary created successfully');
        console.log(response.data);
      } else {
        console.log('Failed to create beneficiary');
      }
    } catch (error) {
      console.log('Error creating beneficiary:', error);
    }
  };


 const onBeneficiaryPress = async () => {
    if (isBeneficiary) {
      navigation.navigate('beneficiaryHomePage');
    } else {
     await createBeneficiary();
      navigation.navigate('beneficiaryHomePage');
    }
  };

const onServiceProviderPress = async () => {
    if (isServiceProvider) {
      navigation.navigate('serviceProviderHomePage');
    } else {
      navigation.navigate('serviceProviderInfo');
    }
  };

 const onPvtOrgPress = async () => {
    if (isPvtOrg) {
      navigation.navigate('pvtOrgHomePage');
    } else {
      navigation.navigate('pvtOrgInfo');
    }
  };

  const fetchUserRole = async () => {
    try {
      // Make API call to check user role
      const response = await axios.get('http://192.168.29.208:3000/get-role');
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL to check user role
      const data = response.data;


      // Update the state based on user role
      setIsBeneficiary(data.isBeneficiary);
      setIsServiceProvider(data.isServiceProvider);
      setIsPvtOrg(data.isPvtOrg);

    } catch (error) {
      console.log('Error fetching user role:', error);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">


        <Image
          className="h-36 w-96 mt-5"
          source={require('../../assets/e-rupi.png')}></Image>


         

          <Text className="font-bold text-xl p-3 mb-5">Select Role</Text>

          <View className="h-full w-full bg-blue-300 rounded-t-3xl">

            <View className="mx-10 p-4 mt-16 mb-5 rounded-2xl">
              <Button
                color="#236DE7"
                className="p-4"
                title="Beneficiary"
                onPress={onBeneficiaryPress}
              />
            </View>

            <View className="mx-10 p-4 mt-9 mb-5 rounded-2xl">
              <Button
                color="#236DE7"
                className="p-4"
                title="Service Provider"
                onPress={onServiceProviderPress}
              />
            </View>

            <View className="mx-10 p-4 mt-9 mb-10 rounded-2xl">
              <Button
                color="#236DE7"
                className="p-4"
                title="Private Organization"
                onPress={onPvtOrgPress}
              />
            </View>


          </View>

        </View>
    </SafeAreaView>
  )
}

export default SelectRole