import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    Image,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { useState } from "react";
  import {Number_input_ud} from "../components/Number_input_ud"
  import {useForm,Controller} from "react-hook-form";
  
  
  const ServiceProviderInfo = () => {
    const navigation = useNavigation();
    [BusinessName, setBusinessName] = useState("");
    [PositionInBusiness, setPositionInBusiness] = useState("");
    [BusinessTag, setBusinessTag] = useState('');
    const [value, setValue] = useState(null);

    const businessTagData = [
        { label: 'HOSPITALITY', value: '1' },
        { label: 'BUSINESS', value: '2' },
        { label: 'PENSION', value: '3' },
        { label: 'AGRICULTURE', value: '4' },
        { label: 'HOUSEHOLD_UTILITIES', value: '5' },
        { label: 'CHILDCARE', value: '6' },
        { label: 'OTHER', value: '7' },
      ];

    const updateServiceProvider = async (
      phoneNumber,
      BusinessName,
      PositionInBusiness,
      BusinessTag
    ) => {
      // create User schema using post method using axios and async , await
      try {
        const response = await axios.patch("http://localhost:3000/create-serviceProvider", {
          phoneNumber: phoneNumber,  
          BusinessName: BusinessName,
          PositionInBusiness: PositionInBusiness,
          BusinessTag: BusinessTag,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <SafeAreaView className="bg-white h-full">
        <View className="items-center  bg-white">
          <Image
            className="h-36 w-96 mt-5"
            source={require("../../assets/e-rupi.png")}
          ></Image>
  
          <Text className="font-bold text-xl p-3 mb-5">User Details</Text>
  
          <View className="h-full w-full bg-blue-300 rounded-t-3xl">
            <Text className="text-center mt-12  mb-1 font-semibold text-lg">
              {" "}
              Enter following details:{" "}
            </Text>
            <View className="flex-col pl-12 gap-5">
              <View className="flex-row gap-4">
                <Ionicons
                  name="bag-handle-outline"
                  color="white"
                  className="top-6"
                  size={40}
                ></Ionicons>
                <Number_input_ud
                 value={businessName}
                 onChangeText={setBusinessName}
                 placeholder="Enter your Business Name"
                 keyboardType="default"
                 />
              </View>
              <View className="flex-row gap-4">
                <Ionicons
                  name="person-circle-outline"
                  color="white"
                  className="top-6"
                  size={40}
                ></Ionicons>
                <Number_input_ud
                 value= {PositionInBusiness}
                 onChangeText={setPositionInBusiness}
                 placeholder="Enter your Position in business:"
                 keyboardType="default"
                 />
              </View>
              <View>
                <Dropdown
                  data={businessTagData}
                  search
                  className="bg-white h-11 w-64 p-2 font-light ml-8 rounded-lg"
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={value}
                  onChange={item => {
                      setValue(item.value);
                      setBusinessTag(item.label);
                  }}
                  
                />
                </View>
  
            </View>
  
            <View className="mx-28 p-4 mt-9 mb-10 rounded-2xl">
              <Button
                color="#82E0AA"
                onPress={updateServiceProvider(phoneNumber, BusinessName, PositionInBusiness).then(() => {
                  navigation.navigate("bankDetails");
                })}
                title="Next"
              ></Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ServiceProviderInfo;
  