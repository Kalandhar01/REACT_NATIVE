import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { images } from '../../constants';

import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please Fill All Fields');
      return; // Exit early if fields are empty
    }

    setSubmitting(true); // Move this up to just before try

    try {
      const result = await createUser(
        form.email,
        form.password,
        form.username
      );

      // Set it global state (if applicable)

      router.replace('/home');
    } catch (error) {
      Alert.alert("Error", error.message); // Corrected typo here
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[95vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white font-semibold bold mt-10 font-psemibold">
            Sign up With Aura
          </Text>

          <Form
            title="UserName"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

          <Form
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <Form
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <Button
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            textStyles=""
            isLoading={submitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Have An Account Already?</Text>

            <Link href="/sign-in" className="text-lg font-psemibold text-secondary-200">
              Log In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
