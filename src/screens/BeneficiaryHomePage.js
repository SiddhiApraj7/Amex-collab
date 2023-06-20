import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import { BackHandler } from 'react-native';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Linking } from 'react-native';
import CryptoJS from 'react-native-crypto-js';


const BeneficiaryHomePage = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  useEffect(() => {
    fetchBenificiaryInfo(phoneNumber);
  }, []);


  const redirectToDigiLocker = () => {
    const digiLockerURL = 'https://www.digilocker.gov.in/';

    Linking.openURL(digiLockerURL)
      .catch((error) => {
        console.error('Failed to open URL:', error);
      });
  };

  async function fetchBenificiaryInfo(phoneNumber) {

    console.log(phoneNumber);
    try {
      setIsLoading(true);
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-beneficiary-info/${phoneNumber}`);

      const beneficiary = response.data;

      let fn = CryptoJS.AES.decrypt(beneficiary.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln = CryptoJS.AES.decrypt(beneficiary.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn = CryptoJS.AES.decrypt(beneficiary.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }



  return (

    <SafeAreaView className="bg-white h-full">

      <View className="items-center bg-white">
        <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>

        {isLoading ? (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (

          <View >
            <View>
              <Header firstName={firstName} lastName={lastName} bankName={bankName} type="1" />
            </View>

            <View><Text className="font-light text-center mt-5">TOTAL BALANCE</Text></View>
            <View><Text className="font-bold text-xl text-center mt-3 mb-3">1000 e₹</Text></View>

            <View className="flex-row gap-6 ml-1">
              <TouchableOpacity onPress={() => {
                navigation.navigate("e_rupi_wallet");
              }}>
                <Walletcard children="E-RUPI" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                navigation.navigate("e_rupee_wallet");
              }}>
                <Walletcard children="E-RUPEE" />
              </TouchableOpacity>

              <View>
                <View className="">
                  <TouchableOpacity onPress={() => { redirectToDigiLocker() }} className="w-38 h-46 mx-0 mr-6 py-5 pl-5 pr-5 text-center rounded-2xl mt-5 bg-blue-200" >
                    <View className="my-auto ml-4">
                      <Ionicons name="documents-outline" size={56} ></Ionicons>
                    </View>
                    <Text className="text-xs ">DIGITAL SAFE</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>



            <View>
              <Text className="font-light text-center mt-10">GOVERNMENT SCHEMES</Text>
            </View>

            <ScrollView horizontal={true} className="mt-5">
              <View className="flex-row text-center">
                <View className="bg-gray-200 ml-6 mr-2 p-2 h-24 align-middle text-center rounded-lg align-center">
                  <Image source={require("../../assets/Vaccine.png")} className="w-20 h-20 "></Image>

                </View>

                <View className="bg-gray-200 ml-1 mr-2 p-4 h-24 align-middle text-center rounded-lg align-center">
                  <Image source={require("../../assets/Emergency-Management.png")} className="w-16 h-16 rounded-ful "></Image>

                </View>

                <View className="bg-gray-200 ml-1 mr-2 w-30 p-5 h-24 align-middle text-center rounded-lg align-center">
                  <Image source={require("../../assets/scholar.png")} className="w-14 h-14 rounded-ful "></Image>

                </View>

                <View className="bg-gray-200 ml-1 mr-2 w-30 p-5 h-24 align-middle text-center rounded-lg align-center">
                  <Image source={require("../../assets/pension.png")} className="w-14 h-14 rounded-ful "></Image>

                </View>
                <View className="bg-gray-200 ml-1 mr-6 w-30 p-5 h-24 align-middle text-center rounded-lg align-center">
                  <Image source={require("../../assets/food.jpeg")} className="w-14 h-14 rounded-ful "></Image>

                </View>
              </View>

            </ScrollView>

          </View>
        )}
      </View>


      <Footer disableDashboardButton={true} />

    </SafeAreaView>
  );
}



export default BeneficiaryHomePage;

