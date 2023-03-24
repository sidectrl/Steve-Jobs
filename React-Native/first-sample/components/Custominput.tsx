import React, { useState } from 'react'
import { StyleSheet, Button, Text, TextInput, View } from 'react-native'

const Custominput = () => {
    const [name, setName] = useState("")
    return (

        <View style={{alignItems: "center"}}>
            <TextInput
                placeholder='Insert name'
                onChangeText={setName}
                value={name}
            />
            <Text style={styles.text}>{name}</Text>
            <View style={[styles.containerButton, ]}>
                <View>
                    <Button title='Show' onPress={() => name} />
                </View>
                <View>
                    <Button title='Cancel' onPress={() => setName("")} />
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    text: {
        color: "red", fontSize: 20
    },
    containerButton: {
        flexDirection: "row",
        marginVertical: 20
    }
})

export default Custominput