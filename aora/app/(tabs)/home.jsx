import React, { useState } from 'react';
import { FlatList, Image, RefreshControl, SafeAreaView, Text, View } from 'react-native';

import Empty from '../../components/Empty';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import { images } from '../../constants';

const Home = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];


  const [refresh , setRefresh] = useState(false);
  const onRefresh = async () =>{
    setRefresh(true);
    //if any video appeared

    setRefresh(false);

  }


  return (
    <SafeAreaView className='bg-primary h-full'>
      {/* List of Elements to map */}
      <FlatList
        data={data} // You can update this to empty array `data={[]}` to test ListEmptyComponent
        
        keyExtractor={(item) => item.id.toString()} // Corrected key extractor
        renderItem={({ item }) => (
          <Text className="text-3xl text-white my-2 mx-4">
            {item.id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-10 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              {/* Left Text Back */}
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                <Text className="text-2xl font-psemibold text-white">Kalandhar</Text>
              </View>

              {/* Right Image */}
              <View className='mt-1.5'>
                <Image
                  className='w-9 h-10'
                  source={images.logoSmall}
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput />

            {/* Latest Video Section */}
            <View className="w-full flex-1 pt-5 pb-3">
              <Text className='text-gray-100 text-lg font-pregular'>Latest Videos</Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        )}

        ListEmptyComponent={() => (
          <Empty 
            title="No videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}

        // Scroll Adjustment to Enable Scrolling
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
}

export default Home;
