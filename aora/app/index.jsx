import { router } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
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
              Discover Endless Possiblity With{' '}
              <Text className='text-secondary-200'>Aura</Text>
            </Text>

            <Image
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode="contain"
              source={images.path}
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets innovations embark on a journey of limitless Exploration
          </Text>

          <Button
            title="Continue With Email"
            handlePress={() => {
              router.push('./sign-in')
            }}
            className="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
