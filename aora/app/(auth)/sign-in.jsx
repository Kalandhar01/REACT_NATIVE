import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { images } from '../../constants';

const SignIn = () => {
  const [form, setForm] = useState({

    email: '',
    password: ''


  })

  // const [submitting ,setsubmitting] = useState(false

  // )



  // const Submit = () => {}





  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white font-semiboldbold mt-10 font-psemibold'>Log in To Aura</Text>
          <Form
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form, email: e
            })}
            otherStyles='mt-7'
            keyboardType="email-address"

          />
          <Form
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form, password: e
            })}
            otherStyles='mt-7'
          


          />

          {/* <Button 
          title = "Sign In"
          handlePress = {Submit}
          containerStyles="mt-7"
          isLoading ={submitting}

          
          /> */}
          <Button  />


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;

const styles = StyleSheet.create({});
