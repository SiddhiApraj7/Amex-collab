import { View, Text, SafeAreaView, Button, TextInput, Image, ScrollView,StyleSheet,Alert } from 'react-native'
import React from 'react'
import { useState,useRef } from 'react';
import { useNavigation } from "@react-navigation/native";
import CustomInput from '../components/CustomInput';
import { FirebaseRecaptchaVerifierModal, FirebaseAuthApplicationVerifier } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../config';
import firebase from 'firebase/compat/app';
import NumberInput from '../components/NumberInput';



const Phone = () => {

    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const [code, setCode] = useState('');
    const recaptchaVerifier = useRef(null);
    

    const sendVerification = () => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
      // setPhoneNumber('');
    };
    const confirmCode = () => {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      firebase.auth().signInWithCredential(credential)
        .then(() => {
          setCode('');
            setPhoneNumber('');
            console.warn('Verified');
          navigation.navigate("userDetails");
        })
        .catch((error) => {
            setPhoneNumber('');
          alert(error);
          navigation.navigate("otp");
        })
    }

  return (
    <SafeAreaView className="bg-white h-screen">
    <View className="items-center  bg-white">

    
    <Image
    className="h-36 w-96 "
    
    source = {require('../../assets/e-rupi.png')}></Image>
    <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} />
    
    <Text className="font-bold text-xl p-3 mb-5">Phone Verification</Text>

    <View  className = "h-screen w-screen  bg-blue-300 rounded-t-3xl">
      <Text className="text-center mt-5  mb-1 font-semibold text-lg"> Enter your Phone Number: </Text>
       <NumberInput 
        placeholder="+910000000000"
        value = {phoneNumber}
        setValue = {setPhoneNumber}
        secureTextEntry={false}
        keyboardType="phone-pad"
       />
       <View className="mx-28 p-4 mb-5  mt-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Verify Phone Number" onPress={sendVerification}/></View>

    <View  className = "h-screen w-screen  bg-blue-300 rounded-t-3xl">
      <Text className="text-center mt-2  mb-1 font-semibold text-lg"> Enter your OTP: </Text>
       <NumberInput 
        placeholder="OTP"
        value = {code}
        setValue = {setCode}
        secureTextEntry={false}
        keyboardType="phone-pad"
       />

<View className="mx-28 p-4 mb-10  mt-3 rounded-3xl"><Button className="text-black text-center" color = "#82E0AA" title="Check OTP" onPress={confirmCode}/></View>
    </View>
  </View>  
</View>
</SafeAreaView>
  )
}


export default Phone;
