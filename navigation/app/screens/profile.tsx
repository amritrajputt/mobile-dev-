import { StyleSheet, Text, View , Pressable} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import React from 'react'

const profile= () => {
    const navigation = useNavigation<any>()
  return (
    <View>
      <Text>details</Text>
      <Pressable onPress={() => navigation.navigate("Details"
      )}>
                <Text>go to details</Text>
            </Pressable>
                
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})