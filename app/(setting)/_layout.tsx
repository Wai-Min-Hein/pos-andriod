import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen options={{headerShown: false}} name="index"  />
  
    </Stack>
  )
}