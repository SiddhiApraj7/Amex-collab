import { View, Text, TextInput} from 'react-native'
import React from 'react'
import {useForm,Controller} from "react-hook-form";

const Number_input_ud = ({name,control,placeholder,secureTextEntry,keyboardType}) => {
  return (
    <View className="bg-gray-100 w-full h-10 rounded-lg p-2 mt-2">
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
                   keyboardType={keyboardType}
                   />
                )}
              />
    </View>
  )
}

export default Number_input_ud;