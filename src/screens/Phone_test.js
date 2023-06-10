import { View, Text, SafeAreaView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


const Phone_test = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation();
    async function createUser(phoneNumber) {
        // create User schema using post method using axioms and async , await
        try {
          const response = await axios.post('http://192.168.29.164:3000/create-user', {
            phoneNumber: phoneNumber,
          });
          console.log(response.data);
          console.warn('database created')
          .then(navigation.navigate("userDetails"))
        } catch (error) {
          console.log(error);
        }
      };
    
  return (
    <SafeAreaView>
        <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="+910000000000"
              keyboardType="phone-pad"
            />

        <Button title = "verify" onPress={createUser(phoneNumber)}></Button>
    </SafeAreaView>

    
  )
}

export default Phone_test