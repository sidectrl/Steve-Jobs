import React from 'react'
import Square from './Square'
import { StyleSheet,View } from 'react-native'

const Ex2 = () => {
  return (
    <>
    <View style={styles.container1}>
        <Square/>
        <Square/>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    container1: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    container2: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    container3: {
        width: '80%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});
export default Ex2