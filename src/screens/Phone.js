import { View, Text, SafeAreaView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'


const Phone = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const createUser = async (phoneNumber) => {
        // create User schema using post method using axios and async , await
        try {
          const response = await axios.post('http://localhost:3000/create-user', {
            phoneNumber: phoneNumber,
          });
          console.log(response);
          console.warn('database created');
        } catch (error) {
          console.log(error)
        }
      };
    
  return (
    <SafeAreaView>
        <TextInput
              value={phoneNumbr}
              onChangeText={setPhoneNumber}
              placeholder="+910000000000"
              keyboardType="phone-pad"
            />

        <Button onPress={createUser(phoneNumber)}></Button>
    </SafeAreaView>

    
  )
}

export default Phone