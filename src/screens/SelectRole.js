import { View, Text, SafeAreaView, Image, TextInput, Button, ActivityIndicator } from 'react-native'
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
  const [is_Beneficiary, setIsBeneficiary] = useState(false);
  const [is_ServiceProvider, setIsServiceProvider] = useState(false);
  const [is_PvtOrg, setIsPvtOrg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserRole = async () => {
    try {
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-role', {
        phoneNumber: phoneNumber
      });
      const data = response.data;
      console.log(data);
      setIsBeneficiary(data.isBeneficiary);
      setIsServiceProvider(data.isServiceProvider);
      setIsPvtOrg(data.isPvtOrg);

    } catch (error) {
      console.log('Error fetching user role:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserRole();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  const createBeneficiary = async () => {
    await fetchUserRole();
    console.log(phoneNumber);
    try {
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-beneficiary', {
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
    } finally {
      setIsLoading(false);
    }
  };


  const onBeneficiaryPress = async () => {
    setIsLoading(true);
    await fetchUserRole();
    if (is_Beneficiary) {
      navigation.navigate('beneficiaryHomePage');
    } else {
      await createBeneficiary();
      navigation.navigate('beneficiaryHomePage');
    }
    setIsLoading(false);
  };

  const onServiceProviderPress = async () => {
    setIsLoading(true);
    await fetchUserRole();
    if (is_ServiceProvider) {
      navigation.navigate('serviceProviderHomePage');
    } else {
      navigation.navigate('serviceProviderInfo');
    }
    setIsLoading(false);
  };

  const onPvtOrgPress = async () => {
    setIsLoading(true);
    await fetchUserRole();
    if (is_PvtOrg) {
      navigation.navigate('pvtOrgHomePage');
    } else {
      navigation.navigate('pvtOrgInfo');
    }
    setIsLoading(false);
  };



  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">


        <Image
          className="h-14 w-1/2 mt-10"

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

export default SelectRole