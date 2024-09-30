import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { icons } from '../constants';

const Form = ({ title, value, placeholder, handleChangeText, otherStyles }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* Title Label */}
      <Text className="text-base text-gray-200 font-pmedium">{title}</Text>

      {/* Input Container */}
      <View className="border-2 border-black-200 w-full h-16 bg-black-100 px-4 rounded-2xl items-center flex-row focus:border-secondary-200">
        {/* Text Input */}
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"  // Optional: Change the placeholder color if needed
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPass}
        />

        {/* Toggle Password Visibility */}
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image
              source={!showPass ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
