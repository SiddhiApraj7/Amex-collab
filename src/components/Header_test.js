import { View, Text , Button, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const Header = ({firstName,lastName,bankName,companyName,positionIncompany,businessName, positionInBusiness,type}) => {
    return(
        <View>
            {/* beneficiary home page */}
        ({type} === "1" )&&(<View className="flex-row gap-2 ml-9 w-96 justify-between bg-neutral-100 p-2 rounded-lg mx-auto border-b-2 border-neutral-200">
            <Ionicons name="person-circle" size={36}></Ionicons>
            <View className="pb-2">
            <Text className="font-medium text-lg mr-7 mt-1">{firstName} {lastName}</Text>
            {/* <Text className="font-light text-sm mr-7">{CompanyName} - {positionInCompany}</Text> */}
            </View>
            <View className=" mr-10">
            <Text className="font-medium text-lg mt-1">{bankName}</Text>
            {/* <Text className="font-light text-center">BALANCE:1000e$</Text> */}
            </View>
        </View>)
         {/* serviceprovider  home page */}
         ({type} === "2" )&&(<View className="flex-row gap-2 ml-7 w-96 justify-between border-b-2 border-neutral-200 bg-neutral-100 p-1 rounded-lg mx-auto">
            <Ionicons name="person-circle" size={36}></Ionicons>
            <View className="pb-2">
            <Text className="font-medium text-lg mr-7">{firstName} {lastName}</Text>
            <Text className="font-light text-sm mr-7">{BusinessName} - {PositionInBusiness}</Text>
            </View>
            <View className=" mr-10">
            <Text className="font-medium text-lg">{bankName}</Text>
            <Text className="font-light text-center">{BusinessTag}</Text>
            </View>
        </View>)
          {/* pvtOrg home page */}
          ({type} === "3" )&&(<View className="flex-row gap-2 ml-7 w-96 justify-between border-b-2 border-neutral-200 bg-neutral-100 p-2 rounded-lg mx-auto">
            <Ionicons name="person-circle" size={36}></Ionicons>
            <View className="pb-2">
            <Text className="font-medium text-lg mr-7">{firstName} {lastName}</Text>
            <Text className="font-light text-sm mr-7">{CompanyName} - {positionInCompany}</Text>
            </View>
            <View className=" mr-10">
            <Text className="font-medium text-lg">{bankName}</Text>
            <Text className="font-light text-center">BALANCE:1000e$</Text>
            </View>
        </View>)
        </View>
    )
}

export default Header;