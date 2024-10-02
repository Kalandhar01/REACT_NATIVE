import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Empty from '../../components/Empty';
import SearchInput from '../../components/SearchInput';
import VideoCard from '../../components/VideoCard';
import { searchPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';

const Search = () => {
  const { query } = useLocalSearchParams();

  console.log('Query:', query); // Check what is being logged here
  

  // Pass query as parameter to useAppwrite
  const { data: posts, isLoading, refetch } = useAppwrite(searchPosts, [query]); // Pass query as params

  // Refetch data when the component mounts or when the query changes
  useEffect(() => {
    refetch();
  }, [query]); // This ensures you refetch when the query changes

  return (
    <SafeAreaView className='bg-primary h-full pt-20'>
      <FlatList
        data={posts || []} // Use posts from the custom hook, fallback to empty array
        keyExtractor={(item) => item.$id} // Corrected key extractor with fallback
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-10 px-4  ">
           
            
                <Text className="font-pmedium text-sm text-gray-100">Search Results</Text>
                <Text className="text-2xl font-psemibold text-white">{query}</Text>
            
             
            
            <View className='mt-2 mb-8'></View>

            {/* component */}
            <SearchInput 
            initialQuery= {query}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty 
            title="No videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default Search;
