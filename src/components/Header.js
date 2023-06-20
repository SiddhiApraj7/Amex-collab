import { View, Text , Button, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const Header = ({firstName,lastName,bankName}) => {
    return(
        <View className="flex-row gap-2 ml-9 w-96 justify-between bg-neutral-100 p-2 rounded-lg mx-auto border-b-2 border-neutral-200">
            <Ionicons name="person-circle" size={36}></Ionicons>
            <View className="pb-2">
            <Text className="font-medium text-lg mr-7 mt-1">{firstName} {lastName}</Text>
            {/* <Text className="font-light text-sm mr-7">{CompanyName} - {positionInCompany}</Text> */}
            </View>
            <View className=" mr-10">
            <Text className="font-medium text-lg mt-1">{bankName}</Text>
            {/* <Text className="font-light text-center">BALANCE:1000e$</Text> */}
            </View>
        </View>
    )
}

export default Header;