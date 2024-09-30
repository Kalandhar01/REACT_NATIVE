import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { icons } from '../constants';

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    
<>
      {/* Input Container */}
      <View className="border-2 border-black-200 w-full h-10 bg-black-100 px-4 rounded-2xl items-center flex-row space-x-4 focus:border-secondary-200">
        {/* Text Input */}
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular "
          value={value}
          placeholder="Search Video"
          placeholderTextColor="gray"  // Optional: Change the placeholder color if needed
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPass}
        />

        <TouchableOpacity>

            <Image
            source={icons.search}
            className='w-5 h-5'
            resizeMode='contain'
            
            
            
            />


        </TouchableOpacity>

       
      </View>
      </>
    
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
