import { Redirect, router } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { images } from '../constants';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  // Destructure values from the context
  const { isLoading, isLoggedIn } = useGlobalContext();

  // Check if the user is not logged in and loading is complete, then redirect to the 'home' route
  if (!isLoading && !isLoggedIn) return <Redirect href='/home' />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[99vh] px-4">
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="w-full h-[300px]"
            resizeMode="contain"
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibility With{' '}
              <Text className='text-secondary-200'>Aura</Text>
            </Text>

            <Image
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode="contain"
              source={images.path}
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovations - Embark on a journey of limitless Exploration
          </Text>

          <Button
            title="Continue With Email"
            handlePress={() => {
              router.push('./sign-in');
            }}
            className="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
