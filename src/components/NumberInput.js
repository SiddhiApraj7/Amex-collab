import { View, Text, TextInput} from 'react-native'
import React from 'react'
import {useForm,Controller} from "react-hook-form";

const NumberInput = ({name,control,placeholder,secureTextEntry,keyboardType}) => {
  return (
    <View className="bg-white flex-row ml-12 mr-12 mt-3 mb-3 p-2 rounded-lg">
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

export default NumberInput