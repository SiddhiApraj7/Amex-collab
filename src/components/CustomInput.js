import { View, Text, TextInput} from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View className="bg-white flex-row ml-12 mr-12 mt-3 mb-3 p-2 rounded-lg">
      <TextInput
        value = {value}
        onChangeText={setValue}
        placeholder={placeholder}
        className="text-center pl-6 mt-1 text-sm font-semibold"
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default CustomInput
