import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

const Trending = ( {posts}) => {
  return (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()} // Corrected key extractor
        renderItem={({ item }) => (
          <Text className="text-3xl text-white my-2 mx-0">
            {item.id}
          </Text>
        )}
        horizontal
        />
  )
}

export default Trending

const styles = StyleSheet.create({})