import { StyleSheet, Text, View , Pressable} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import React from 'react'

const profile= () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>details</Text>
      <Pressable onPress={() => navigation.popTo("Details")}>
                <Text>go to details</Text>
            </Pressable>
                
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})