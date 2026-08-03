import { StyleSheet, Text, View , Pressable} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import React from 'react'

const details = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>details</Text>
      <Pressable onPress={() => navigation.push("Details")}>
                <Text>go to details</Text>
            </Pressable>
                <Pressable onPress={() => navigation.goBack("home")}>
                <Text>go back</Text>
            </Pressable>
    </View>
  )
}

export default details

const styles = StyleSheet.create({})