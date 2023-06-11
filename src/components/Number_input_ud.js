import { View, Text, TextInput} from 'react-native'
import React from 'react'
import {useForm,Controller} from "react-hook-form";

const Number_input_ud = ({name,control,placeholder,secureTextEntry,keyboardType}) => {
  return (
    <View className="bg-white p-2 h-11 w-56 font-light rounded-md">
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