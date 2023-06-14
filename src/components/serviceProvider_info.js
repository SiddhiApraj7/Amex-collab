import { View, Text , Image, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { AppContext } from "../../AppContext";
import { useContext } from "react";
//import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';


const SelectServiceProvider_comp = () => {
  const [selectedProviderIndex, setSelectedProviderIndex] = useState(-1);
  const [serviceProviders, setServiceProviders] = useState([]);
  const {serviceProviderChoice, setserviceProviderChoice} = useContext(AppContext);

  const handleProviderClick = (index,providerNumber) => {
    if (index === selectedProviderIndex) {
      // Clicked on the currently selected provider, deselect it
      setSelectedProviderIndex(-1);
    } else {
      // Clicked on a new provider, update the selected index
      setSelectedProviderIndex(index);
      setserviceProviderChoice(providerNumber);
      console.log(serviceProviderChoice);
    }
  };

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
        <TouchableOpacity /* className="p-2 bg-white border-2 mb-2 rounded-md h-18 mx-2" */ style={[styles.providerContainer, selectedProviderIndex === index && styles.selectedProviderContainer]} key={provider.serviceProviderId} onPress={() => handleProviderClick(index, provider.Users.phoneNumber)}>
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



const styles = StyleSheet.create({
  providerContainer: {
    padding: 2,
    backgroundColor: 'white',
    borderWidth: 2,
    marginBottom: 5,
    marginHorizontal:7,
    borderRadius: 4,
  },
  selectedProviderContainer: {
    borderColor: 'lime',
    borderwidth: 5,
  }});

export default SelectServiceProvider_comp;