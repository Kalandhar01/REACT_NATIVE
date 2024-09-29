import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { TouchableOpacity } from 'react-native'

const Button = ({title , handlePress , containerStyles , textStyles , isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    
    
    
    className={`bg-secondary-200 rounded-xl min-h-[50px] justify-center items-center w-full mt-7 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}
    >

      <Text className={`text-primary font-psemibold text-lg  text-center ${textStyles}`}>   {title}</Text>
   
      
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})