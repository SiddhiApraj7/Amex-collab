import { View, Text } from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";


const History = ({name,cost,date,color,moneyType}) => {
  return (
    <View>
            <View style={{backgroundColor: color}}className="h-16 w-80 mx-auto mt-8 p-3 rounded-lg flex-row justify-evenly">
              <View><Ionicons name="person-remove-outline" size={30}></Ionicons></View>
              <View><Text className="ml-4">{name}</Text><Text className="ml-4 font-light">{date}</Text></View>
              <View><Text className="ml-4 text-right font-light"> {moneyType}{cost}</Text></View>
            </View>
    </View>
    
    
  )
};



export default History;