import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../constants';

const VideoCard = ({ video: { title, thumbnail, creator = {} } }) => {
  const { username, avatar } = creator;


  const [play , setPlay] = useState(false);

  return (


    <View className="flex-col items-center px-4 mb-14" >

      <View className='flex-row gap-3 items-start'>
        <View className='justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg border  border-secondary-100 justify-center items-center p-0.5 '>

            <Image
            source={ {uri:avatar}}
            className="w-full h-full rounded-lg"
            resizeMode='cover'
            />

          </View>
        
          <View className='justify-center flex-1 ml-3 gap-y-1'>
            <Text className='text-white font-psemibold text-sm '
            numberOfLines={1}>
              {title}
            </Text>

            <Text
            className='text-xs text-gray-100 font-pregular'numberOfLines={1}
            
            >{username}</Text>

          </View>






        </View>

        <View className='pt-2'>
      <Image
      source={icons.menu}
      className='w-5 h-5'
      resizeMode='contain'
      />


        </View>

      </View>



{/* //not play */}
{
  play?(
    <Text className='text-white '>
      Playing
    </Text>
    
  ) :
  (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={ () => setPlay(true)}
    className='w-full h-60 rounded-lgmt-3 relative justify-center items-center mt-4'>
      <Image 
      source={ { uri: thumbnail}}
      className='w-full h-60 rounded-xl mt-3'
      resizeMode='cover'
      
      
      />

      <Image
      source={icons.play}
      className='w-12 h-12  absolute' />



    </TouchableOpacity>
  )

}



    </View>
























    // <View className="flex-col items-center px-4 mb-14">
    //   {/* Video Thumbnail */}
    //   {thumbnail && (
    //     <Image
    //       source={{ uri: thumbnail }}
    //       className="w-full h-48 mb-4 rounded-lg"
    //       resizeMode="cover"
    //     />
    //   )}

    //   {/* Video Title */}
    //   <Text className="text-xl font-bold text-white mb-2">{title || 'Untitled Video'}</Text>

    //   {/* Creator Info */}
    //   <View className="flex-row items-center mt-2">
    //     {/* Creator Avatar */}
    //     {avatar && (
    //       <Image
    //         source={{ uri: avatar }}
    //         className="w-10 h-10 rounded-full"
    //         resizeMode="cover"
    //       />
    //     )}

    //     {/* Creator Username */}
    //     <Text className="text-md font-medium text-gray-300 ml-3">{username || 'Unknown Creator'}</Text>
    //   </View>
    // </View>
  );
};

export default VideoCard;
