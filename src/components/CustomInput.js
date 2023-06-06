import { View, Text, TextInput} from 'react-native'
import React from 'react'
import {useForm,Controller} from "react-hook-form";

const CustomInput = ({control,name,placeholder,secureTextEntry}) => {
  return (
    <View className="bg-white flex-row ml-12 mr-12 mt-3 mb-3 p-2 rounded-lg">
      {/* <TextInput
        value = {value}
        onChangeText={setValue}
        placeholder={placeholder}
        className="text-center pl-6 mt-1 text-sm font-semibold"
        secureTextEntry={secureTextEntry}
      /> */}
        <Controller
                control={control}
                name = {name}
                render={({field: {value,onChange,onBlur} })=>(
                  <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                   placeholder={placeholder}
                   secureTextEntry={secureTextEntry}
                   />
                )}
              />
    </View>
  )
}

export default CustomInput
