import { View, Text, SafeAreaView, Button, TextInput, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal, FirebaseAuthApplicationVerifier } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../config';
import firebase from 'firebase/compat/app';

const Phone = () => {

  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber('');
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        setCode('');
      })
      .catch((error) => {
        alert(error);
      })
    Alert.alert(
      'Your phone number is registered.'
    ).then(() => {navigation.navigate("userDetails")})
  }


  return (
    <SafeAreaView className="bg-white h-screen">
      <View style={styles.container}>
        <View className="items-center  bg-white">
        <Image
          className="h-36 w-96 "
          source={require('../../assets/e-rupi.png')}></Image>


          <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} />

          <Text style={styles.otpText}>Login Using OTP</Text>

          <TextInput 
            onChangeText={setPhoneNumber}
            placeholder='Phone Number with Country code'
            keyboardType='phone-pad'
            autoCompleteType='tel'
            style={styles.textInput} />

          <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
            <Text style={styles.buttonText}>Send Verification</Text>
          </TouchableOpacity>


          <TextInput
            placeholder='Confirm Code'
            onChangeText={setCode}
            keyboardType="number-pad"
            style={styles.textInput}
          />

          <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.buttonText}>
              Confirm verification
            </Text>
          </TouchableOpacity>



          {/* <View className="mx-28 p-4 mb-10 rounded-2xl"><Button onPress={() => {
            navigation.navigate("userDetails");
          }} className="text-black text-center" color="#82E0AA" title="Submit"></Button></View> */}

        </View>

      </View>
    </SafeAreaView>
  )
}

export default Phone;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 24,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: 'center',
    color: "#222",
    marginTop: 30,
  },
  sendVerification: {
    padding: 20,
    backgroundColor: "#3498db",
    borderRadius: 10
  },
  sendCode: {
    padding: 20,
    backgroundColor: "#9b59b6",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  },
  otpText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    margin: 20

  }

});