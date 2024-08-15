import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


interface btnInterface {
    btnText: string,
    containerStyle?: string,
    textStyle?: string,
    disabled?: boolean,
    disabledStyle?: string,
    disabledText?: string,
    handlePress: () => void
}
export default function CustomButton({btnText, handlePress, containerStyle, textStyle}: btnInterface) {
  return (
    <TouchableOpacity className={`${containerStyle}`} onPress={handlePress}>
        <Text  className={`${textStyle}`}>{btnText}</Text>
    </TouchableOpacity>
  )
}