import { 
    hasHardwareAsync,
    isEnrolledAsync,
    authenticateAsync 
  } from 'expo-local-authentication';
  import { useState } from 'react';
  import { Button, StyleSheet, SafeAreaView, Image, Text, View } from 'react-native';
  import { useNavigation } from "@react-navigation/native";
  import { Ionicons } from '@expo/vector-icons';
  const Fingerprint = () => {
    // wherever the useState is located 
    const navigation = useNavigation();
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const biometricsAuth = async () => {
      const compatible = await hasHardwareAsync()
      if (!compatible) throw 'This device is not compatible for biometric authentication'
      const enrolled = await isEnrolledAsync()
      if (!enrolled) throw `This device doesn't have biometric authentication enabled`
      const result = await authenticateAsync()
      if (!result.success) throw `${result.error} - Authentication unsuccessful`
      setIsAuthenticated(result.success);
      
    }

    //const navigation = useNavigation();
      //else throw "success"
      return (
        <SafeAreaView className="bg-white h-full">
        <View className="items-center  bg-white">

        
        <Image
        className="h-36 w-96 "
        
        source = {require('../assets/e-rupi.png')}></Image>
        
        <Text className="font-bold text-xl p-3 mb-5">Login</Text>

        <View className = "h-full w-full bg-blue-300 rounded-t-3xl">
          <Text className="text-center mt-20  mb-1 font-semibold text-lg"> Biometric Authentication </Text>
          <View className="bg-white text-center mx-auto rounded-full p-2 mt-4">
          <Ionicons onPress={() => {biometricsAuth()}} name="finger-print-outline" size={70}></Ionicons>
          </View>

         
         <View className="text-center p-2 mt-5 items-center">
          {isAuthenticated ? <Button title="Next" color="#82E0AA" onPress={() => {navigation.navigate("otp")}}></Button> : <Text>Press the fingerprint to initiate biometric authentication</Text>}
          </View> 
          

        {/* <View className="mx-auto p-4 mb-10 rounded-2xl text-center "><Button className="text-black text-center" color = "#5FEEA0" title="Submit"></Button></View> */}

        </View>
        
    </View>
    </SafeAreaView>

    //         <Button color="" className="bg-blue-400"title="authenticate" onPress={() => {biometricsAuth()}}></Button>
    // <Text className="font-medium">{isAuthenticated ? "Here's some sensitive info!" : "Authenticate using fingerprint sensor"}</Text>
       
      )
  }

  
  export default Fingerprint;