import { StyleSheet, Text, View , Pressable} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import React from 'react'

const details = ({route}) => {
    const navigation = useNavigation<any>()
    const{itemId,otherParam} = route.params
  return (
    <View>
      <Text>details</Text>
      <Pressable onPress={() => navigation.push("Profile")}>
                <Text>go to profile</Text>
            </Pressable>
                <Pressable onPress={() => navigation.goBack("Home")}>
                <Text>go back</Text>
                <Text>itemId:{itemId}</Text>
                <Text>otherParam:{otherParam}</Text>
            </Pressable>
    </View>
  )
}

export default details

const styles = StyleSheet.create({})