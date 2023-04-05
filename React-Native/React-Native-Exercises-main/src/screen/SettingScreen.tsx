import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ScreenFC from "../models/ScreenFC";

const SettingScreen: ScreenFC<'Setting'> = ({ route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen {route.params?.id}</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingScreen;