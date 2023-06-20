import { View, Text, TextInput, SafeAreaView, Button, Image, ActivityIndicator } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Number_input_ud from "../components/Number_input_ud";
import { useForm, Controller } from "react-hook-form";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import axios from "axios";
import CryptoJS from "react-native-crypto-js";

const UserDetails = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);


  const updateUser = async (data) => {
    console.log(data);
    console.log(phoneNumber);
    setIsLoading(true);

    let cipherFirstName = CryptoJS.AES.encrypt(data.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu").toString();
    console.log(cipherFirstName);

    let cipherLastName = CryptoJS.AES.encrypt(data.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu").toString();
    console.log(cipherLastName);

    let cipherEmail = CryptoJS.AES.encrypt(data.recoveryEmail, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu").toString();
    console.log(cipherEmail);

    try {
      const response = await axios.patch("https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-user", {
        phoneNumber: phoneNumber,
        firstName: cipherFirstName,
        lastName: cipherLastName,
        recoveryEmail: cipherEmail

      });
      console.log(response.data);
      navigation.navigate('bankDetails');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">
        <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>

        <Text className="font-bold text-xl p-3 mb-5">User Details</Text>

        <View className="h-full w-full bg-blue-300 rounded-t-3xl">
          <Text className="text-center mt-12  mb-5 font-semibold text-lg">
            {" "}
            Enter your details:{" "}
          </Text>


          <View className="flex-col mt-4 gap-5">
            <View className="flex-row gap-4">
              <View className="pl-12">
                <Ionicons
                  name="person-circle-outline"
                  color="white"
                  className="top-6"
                  size={40}
                ></Ionicons>
              </View>
              <View className="ml-2">
                <Number_input_ud
                  control={control}
                  name="firstName"
                  placeholder="Enter your first name"
                  secureTextEntry={false}
                  keyboardType="default"
                />
              </View>
            </View>


            <View className="flex-row gap-4">
              <View className="pl-12">
                <Ionicons
                  name="person-circle-outline"
                  color="white"
                  className="top-6"
                  size={40}
                ></Ionicons>
              </View>
              <View className="ml-2">
                <Number_input_ud
                  control={control}
                  name="lastName"
                  secureTextEntry={false}
                  placeholder="Enter your last name"
                  keyboardType="default"
                />
              </View>
            </View>

            <View className="flex-row gap-4">
              <View className="pl-12">
                <Ionicons
                  name="mail-outline"
                  color="white"
                  className="top-6"
                  size={40}
                ></Ionicons>
              </View>
              <View className="ml-2">
                <Number_input_ud
                  control={control}
                  secureTextEntry={false}
                  name="recoveryEmail"
                  placeholder="Enter recovery Email"
                  keyboardType="default"
                />
              </View>
            </View>
          </View>

          <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
            <Button
              color="#82E0AA"
              onPress={handleSubmit(updateUser)}
              title="Next"
            ></Button>
          </View>

          {isLoading && (
            <View className=" justify-center items-center z-40">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

        </View>

      </View>
    </SafeAreaView>
  );
};

export default UserDetails;