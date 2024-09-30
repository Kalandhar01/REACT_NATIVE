import router from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import { images } from '../constants'

const Empty = ({ title, subtitle }) => {

    return (
        <View className="justify-center items-center px-2">
            <Image
                source={images.empty}
                className="w-[200px] h-[215px]"
                resizeMode='contain'


            />

            <Text className="text-1xl font-psemibold text-white text-center">{title}</Text>
            <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

    <Button 
    title= "Create Video"
    handlePress={ () => { router.push('/create')  }}
    containerStyles="w-full my-5"
    />






        </View>
    )
}

export default Empty

const styles = StyleSheet.create({})