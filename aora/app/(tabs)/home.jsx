import React, { useState } from 'react';
import { Alert, FlatList, Image, RefreshControl, SafeAreaView, Text, View } from 'react-native';

import Empty from '../../components/Empty';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import VideoCard from '../../components/VideoCard'; // Fixed casing to match component name convention
import { images } from '../../constants';
import { getAllPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';

const Home = () => {
  // Using custom hook to fetch posts
  const { data: posts, isLoading, refetch } = useAppwrite(getAllPosts);

  const [refresh, setRefresh] = useState(false);

  // Pull-to-refresh handler
  const onRefresh = async () => {
    setRefresh(true);
    try {
      // Refetch data using the custom hook's functionality
      await refetch();
    } catch (error) {
      Alert.alert("Error", error.message || "Failed to refresh data.");
    } finally {
      setRefresh(false);
    }
  };

  return (
    <SafeAreaView className='bg-primary h-full'>
      {/* List of Elements to map */}
      <FlatList
        data={posts || []} // Use posts from the custom hook, fallback to empty array
        keyExtractor={(item) => item.$id} // Corrected key extractor with fallback
        renderItem={({ item }) => <VideoCard video={item} />}
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
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;
