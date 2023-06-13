import { View, Text , Image, } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
const SelectServiceProvider_comp = () => {
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    getAllServiceProviders();
  }, []);

  async function getAllServiceProviders() {
    try {
      const response = await axios.get('http://192.168.29.208:3000/all-service-providers');
      console.log(response.data);
      const serviceProvidersList = response.data;
      setServiceProviders(serviceProvidersList);
    } catch (error) {
      console.error(error);
      console.log(error);
      // Handle error and navigation logic
    }
  }
  return (
    <View>
      {serviceProviders.map((provider, index) => (
        <TouchableOpacity className="p-2 bg-white border-2 mb-2 rounded-md h-18 mx-2" key={provider.serviceProviderId}>
          <View className="flex-row my-auto gap-5">
            <Image className="h-12 w-12" source={require('../../assets/pension-vector-icon.jpg')} />
            <View className="bg-white h-18">
              <View className="flex-row space-x-10">
                <Text className="font-light text-md p-1">{provider.BusinessName}</Text>
                <Text className="font-light text-md p-1">{provider.Users.phoneNumber}</Text>
              </View>
              <Text className="font-light text-md p-1 ml-1">{provider.BusinessTag}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
  
}

export default SelectServiceProvider_comp;