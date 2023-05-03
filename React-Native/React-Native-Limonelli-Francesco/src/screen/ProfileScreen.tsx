import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Linking, TouchableOpacity } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useDispatch, useSelector } from "react-redux";
import { AccountProps, logout } from "../redux/actions/accountActions";
import { styles } from "./SignUp";

const ProfileScreen: CustomScreenFC<"Profile"> = ({ navigation }) => {
  const [image, setImage] = useState<string>();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const dispatch = useDispatch();

  const { account } = useSelector(
    (state: { accountReducer: AccountProps }) => state.accountReducer
  );

  const pickImage = async () => {
    ImagePicker.requestMediaLibraryPermissionsAsync
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  // ImagePicker.requestMediaLibraryPermissionsAsync()

  return (
    <View style={styles2.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Text>Email: {account?.email}</Text>
      <Text>Born: {account.date?.valueOf()}</Text>
      <Text>Logged: {String(account?.isLogged)} ?</Text>
      <Button title="Choice photo" color="blue" onPress={pickImage} />
      <TouchableOpacity><Text style={styles.datePickerStyle}>{account?.phoneNumber}</Text></TouchableOpacity>
      <Button title="Logout" color="blue" onPress={() => dispatch(logout())} />
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
