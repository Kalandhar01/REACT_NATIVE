import { router, usePathname } from 'expo-router';
// Import useRouter and usePathname
import React, { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { icons } from '../constants';

const SearchInput = ( {initialQuery }) => {

  const pathName = usePathname();
  const [query , setQuery ] = useState(initialQuery || '');





  // const [query, setQuery] = useState('');
  // const router = useRouter(); // Initialize router
  // const pathname = usePathname(); // Get the current pathname

  // const handleSearch = () => {
  //   if (!query) {
  //     return Alert.alert("Missing Query", "Please input something to search");
  //   }

  //   if (pathname.startsWith('/search')) {
  //     router.setParams({ query });
  //   } else {
  //     router.push(`/search/${query}`);
  //   }
  // };

  return (
    <>
      {/* Input Container */}
      <View className="border-2 border-black-200 w-full h-16 bg-black-100 px-4 rounded-2xl flex-row items-center space-x-4 focus:border-secondary-200">
        {/* Text Input */}
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={query}
          placeholder="Search Video"
          placeholderTextColor="#CDCDE0" 
          onChangeText={ (e)=> setQuery(e) }
        />

        <TouchableOpacity 
        onPress={() => {
          if(!query){
            return Alert.alert('Missing Query');
          }

          if(pathName.startsWith('/search')) router.setParams({query})

            else router.push(`/search/${query}`)
        }}>
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
