import { StyleSheet, Text, View } from 'react-native'
import {Link} from "@react-navigation/native"
import React from 'react'

const home = () => {
  return (
    <View>
      <Text>home</Text>
      <Link
       screen={"Details"}> go to Details</Link>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})