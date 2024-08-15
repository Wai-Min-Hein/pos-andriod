import {  Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

export default function CashierLogin() {

    const handlePress = () => {
        router.push('/(home)')
    }
  return (
    <View className='mt-10'>
      <Text className='text-2xl text-center'>Enter cashier ID</Text>
      <View className='px-6 flex flex-col gap-5 mt-2'>
        <TextInput className='border border-gray-400  px-2 py-1 rounded-md text-lg'  placeholder='Enter Cashier ID'/>
        
        
        <CustomButton btnText={'Login'} handlePress={handlePress}/>
        
        
      </View>
    </View>
  )
}

