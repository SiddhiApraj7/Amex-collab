import { View, Text, SafeAreaView, TextInput, Image, Button, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Walletcard from '../components/Walletcard';
import { BackHandler } from 'react-native';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext , useState} from "react";
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { Linking } from 'react-native';

const redirectToDigiLocker = () => {
  const digiLockerURL = 'https://www.digilocker.gov.in/';
  
  Linking.openURL(digiLockerURL)
    .catch((error) => {
      console.error('Failed to open URL:', error);
    });
};




const BeneficiaryHomePage = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);
  
  //const { phoneNumber, setPhoneNumber } = useContext(AppContext);

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
  useEffect(() => {
    // Fetch user data and check role status
    fetchBenificiaryInfo(phoneNumber);
  }, []);

  async function fetchBenificiaryInfo(phoneNumber) {
    //const phoneNumber = "+9101";
    try {
      const response = await axios.get(`http://192.168.29.164:3000/get-beneficiary-info/${phoneNumber}`);
      // console.log(response.data);
      const beneficiary = response.data;
      setFirstName(beneficiary.firstName);
      setLastName(beneficiary.lastName);
      setBankName(beneficiary.bankName);
    } catch (error) {
      console.error(error);
      console.log(error);
      /* alert(error);
      setError('User already exists, please login.');
      setTimeout(() => {
        setError('');
        navigation.navigate('login'); // Replace 'Login' with the name of your login screen
      }, 3000); */ // Redirect to login screen after 3 seconds
    } finally {
      setIsLoading(false);
    }
  }

  // fetchBenificiaryInfo();

  const textrupi = (

    <Text className="text-xs"> E-RUPI</Text>
  )
  const textrupee = (

    <Text className="text-xs" >E-RUPEE</Text>
  )


  return (

    <SafeAreaView className="bg-white h-full">
      
      <View className="items-center bg-white">
        <Image
          className="h-36 w-52 mt-4"
          source={require('../../assets/e-rupi.png')}></Image>

      {isLoading ? (
        <View className=" justify-center items-center z-40">
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (

        <View >
         <View>
        <View className="flex-row gap-2 ml-7 w-96 justify-between">
          <View className="flex-row gap-1">
          <Ionicons name="person-circle" size={36}></Ionicons>
            <Text className="font-medium text-lg">{firstName} {lastName}</Text>
          </View>
            
            {/* <Text className="font-light text-sm mr-7">{CompanyName} - {positionInCompany}</Text> */}
            <View className=" mt-3 mr-10">
            <Text className="font-medium text-lg">{bankName}</Text>
            {/* <Text className="font-light text-center">BALANCE:1000e$</Text> */}
            {/* <Text className="font-light text-sm mr-7">{BusinessTag}</Text> */}
            </View>
        </View>
        </View>

          <View><Text className="font-light text-center mt-5">TOTAL BALANCE</Text></View>
          <View><Text className="font-bold text-xl text-center mt-3 mb-3">1000 e₹</Text></View>

          <View className="flex-row gap-6 ml-1">
            <TouchableOpacity onPress={() => {
              navigation.navigate("e_rupi_wallet");
            }}>
              <Walletcard children={textrupi} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate("e_rupee_wallet");
            }}>
              <Walletcard children={textrupee} />
            </TouchableOpacity>

            <View>
              <View className="">
                <TouchableOpacity onPress={() => {redirectToDigiLocker()}} className="w-38 h-46 mx-0 mr-6 py-5 pl-5 pr-5 text-center rounded-2xl mt-5 bg-blue-200" >
                  <View className="my-auto ml-4">
                    <Ionicons name="documents-outline" size={56} ></Ionicons>
                  </View>
                  <Text className="text-xs">Digital Safe</Text>
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
                {/*<Ionicons name="medkit-outline" className="mx-auto"size={56}></Ionicons>*/}

              </View>

              <View className="bg-gray-200 ml-1 mr-2 p-4 h-24 align-middle text-center rounded-lg align-center">
                <Image source={require("../../assets/Emergency-Management.png")} className="w-16 h-16 rounded-ful "></Image>
                {/*<Ionicons name="medkit-outline" className="mx-auto"size={56}></Ionicons>*/}

              </View>

              <View className="bg-gray-200 ml-1 mr-2 w-30 p-5 h-24 align-middle text-center rounded-lg align-center">
                <Image source={require("../../assets/scholar.png")} className="w-14 h-14 rounded-ful "></Image>
                {/*<Ionicons name="medkit-outline" className="mx-auto"size={56}></Ionicons>*/}

              </View>

              <View className="bg-gray-200 ml-1 mr-2 w-30 p-5 h-24 align-middle text-center rounded-lg align-center">
                <Image source={require("../../assets/pension.png")} className="w-14 h-14 rounded-ful "></Image>
                {/*<Ionicons name="medkit-outline" className="mx-auto"size={56}></Ionicons>*/}

              </View>
              <View className="bg-gray-200 ml-1 mr-6 w-30 p-5 h-24 align-middle text-center rounded-lg align-center">
                <Image source={require("../../assets/food.jpeg")} className="w-14 h-14 rounded-ful "></Image>
                {/*<Ionicons name="medkit-outline" className="mx-auto"size={56}></Ionicons>*/}

              </View>
            </View>

          </ScrollView>

        </View>
        )}
      </View>
      

      {/* <View className="bg-white rounded-lg pt-2 h-14" style={{position: 'absolute', left:0, right:0, bottom:0, flex:1}}>
          <View className="flex-row gap-10 justify-evenly" >
          <View className="text-center items-center"><Ionicons name="home-outline" size={20}></Ionicons><Text className="text-xs">Dashboard</Text></View>
          <View className="text-center items-center"><Ionicons name="build-outline" size={20}></Ionicons><Text className="text-xs">Select Role</Text></View>
          <View className="text-center items-center"><Ionicons name="wallet-outline" size={20}></Ionicons><Text className="text-xs">Wallets</Text></View>
          <View className="text-center items-center"><Ionicons name="person-outline" size={20}></Ionicons><Text className="text-xs">Profile</Text></View>
      </View>

      </View> */}
      <Footer disableDashboardButton={true}/>
     
    </SafeAreaView>
  );
}



export default BeneficiaryHomePage;

