import React from 'react'
import { StyleSheet, View } from 'react-native'

const square = () => {
  return (
    <View style = {styles.container}/>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        width: 30,
        height: 30,
    }
})

export default square