import { View, Text } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <Text style={{color:'black'}} >This is testing fastlane app through github actions with fastlane</Text>
    </View>
  )
}