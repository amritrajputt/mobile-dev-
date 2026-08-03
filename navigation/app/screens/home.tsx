import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from "@react-navigation/native"
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const home = () => {
    const navigation = useNavigation()
    return (
        <View> 
            <Text>home</Text>
            {/* <Link
       screen={"Details"}> go to Details</Link> */}
            <Pressable onPress={() => navigation.push("Details",{
        itemId: 86,
        otherParam: 'hello from profile',}
      )}>
                <Text>go to details</Text>
            </Pressable>
        </View>
    )
}

export default home

const styles = StyleSheet.create({})