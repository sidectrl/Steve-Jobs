import React from 'react'
import { StyleSheet, View } from 'react-native';
import Square from './Square';


const ex1 = () => {
    return (
        <>
            <View style={styles.container1}>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </View>

            <View style={styles.container2}>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </View>
            <View style={styles.container3}>
                <Square></Square>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container1: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
export default ex1