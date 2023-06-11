import { View, Text, SafeAreaView, Image, TextInput, Button } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import axios from "axios";

const SelectRole = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isPrivateOrg, setIsPrivateOrg] = useState(false);

  useEffect(() => {
    // Check if the user is already a beneficiary
    const checkBeneficiaryStatus = async () => {

      try {
        const response = await axios.patch("http://192.168.29.208:3000/create-user", {
          phoneNumber: phoneNumber,
          firstName: data.firstName,
          lastName: data.lastName,
          recoveryEmail: data.recoveryEmail
        });
        console.log(response.data);
        navigation.navigate('bankDetails');
      } catch (error) {
        console.log(error);
      }
      const userIsBeneficiary = true;

      setIsBeneficiary(userIsBeneficiary);
    };

    checkBeneficiaryStatus();
  }, []);

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">


        <Image
          className="h-36 w-96 mt-5"

          source={require('../../assets/e-rupi.png')}></Image>

        <Text className="font-bold text-xl p-3 mb-5">Select Role</Text>

        <View className="h-full w-full bg-blue-300 rounded-t-3xl">

          <View className="mx-10 p-4 mt-16 mb-5 rounded-2xl"><Button color="#236DE7" className="p-4" title="Beneficiary" onPress={() => {
            navigation.navigate("beneficiaryHomePage");
          }}></Button></View>
          <View className="mx-10 p-4 mt-9 mb-5 rounded-2xl"><Button color="#236DE7" className="p-4" title="Service Provider" onPress={() => {
            navigation.navigate("serviceProviderInfo");
          }}></Button></View>
          <View className="mx-10 p-4 mt-9 mb-10 rounded-2xl"><Button color="#236DE7" className="p-4" title="Private Organization" onPress={() => {
            navigation.navigate("pvtOrgInfo");
          }}></Button></View>


        </View>

      </View>
    </SafeAreaView>
  )
}

export default SelectRole