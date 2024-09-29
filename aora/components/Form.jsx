import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Form = ({ title, value, placeholder, handleChangetext, otherStyles, ...props }) => {
  return (
    <View className={`space-y-10 ${otherStyles}`}>
      <Text className='text-base text-gray-200 font-pmedium'>{title}</Text>
   
      <View className='border border-gray-400 p-2 rounded-md'>
       
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
