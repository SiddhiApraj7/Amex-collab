import { View, Text, SafeAreaView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";


const Phone = () => {

  
  const navigation = useNavigation();
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [code, setCode] = useState('');
  const recaptchaVerifier = useRef(null);

  async function createUser(phoneNumber) {
    // create User schema using post method using axioms and async , await
    try {
      const response = await axios.post('http://192.168.1.45:3000/create-user', {
        phoneNumber: phoneNumber,
      });
      console.log(response.data);
      console.warn('database created');
    } catch (error) {
      console.log(error);
    }
  };
  // fetch('http://192.168.29.164:3000/create-user', {
  //   // fetch('http://127.0.0.1:3000/create-user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       phoneNumber: '1234567890',
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       // Include other required request body properties
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the response data
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //       console.error(error);
  //     });

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        setCode('');
        console.warn('Verified');
        // setPhoneNumber('');
        createUser(phoneNumber) 
        .then( console.warn('user created'))
        .finally(navigation.navigate("userDetails"))
        // navigation.navigate("userDetails");
      })
      .catch((error) => {
        // setPhoneNumber('');
        alert(error);
        navigation.navigate("otp");
      })
  };

  return (
    <SafeAreaView>
        <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="+910000000000"
              keyboardType="phone-pad"
            />
          <View className="mx-28 p-4 mb-5  mt-3 rounded-3xl"><Button className="text-black text-center" color="#82E0AA" title="Verify Phone Number" onPress={sendVerification} /></View>

          <View className="h-screen w-screen  bg-blue-300 rounded-t-3xl">
            <Text className="text-center mt-2  mb-1 font-semibold text-lg"> Enter your OTP: </Text>
            <View className="bg-white flex-row ml-12 mr-12 mt-3 mb-3 p-2 rounded-lg">
              <TextInput
                value={code}
                onChangeText={setCode}
                placeholder="OTP"
                keyboardType="phone-pad"
              />

            </View>

            <View className="mx-28 p-4 mb-10  mt-3 rounded-3xl"><Button className="text-black text-center" color="#82E0AA" title="Check OTP" onPress={confirmCode} /></View>
        
      </View>
    </SafeAreaView>

    
  )
}

export default Phone