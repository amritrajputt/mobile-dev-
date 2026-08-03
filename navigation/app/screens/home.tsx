import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from "@react-navigation/native"
import React from 'react'

const home = ({ navigation }: any) => {
    return (
        <View> 
            <Text>home</Text>
            {/* <Link
       screen={"Details"}> go to Details</Link> */}
            <Pressable onPress={() => navigation.navigate("Details")}>
                <text>go to details</text>
            </Pressable>
        </View>
    )
}

export default home

const styles = StyleSheet.create({})