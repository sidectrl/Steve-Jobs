import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Linking, TouchableOpacity } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useDispatch, useSelector } from "react-redux";
import { AccountProps, logout } from "../redux/actions/accountActions";
import { styles } from "./SignUp";
import { styles2 } from "./DetailScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen: CustomScreenFC<"Profile"> = ({ navigation }) => {

  const { account } = useSelector(
    (state: { accountReducer: AccountProps }) => state.accountReducer
  );

  return (
    <View style={styles2.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      <Image alt='image' source={{ uri: account?.image }} style={{ width: 150, height: 150, borderRadius: 80 }} />
      <Text style={styles2.fontInfo}><Icon name='user' size={25} /> {account?.name} {account?.lastName}</Text>
      <Text style={styles2.fontInfo}><Icon name='calendar' size={25} /> {account.date?.valueOf()}</Text>
      <Text style={styles2.fontInfo}><Icon name='envelope-o' size={25} /> {account?.email}</Text>
      <Text style={[styles2.fontInfo]}><Icon name='phone' size={25} /> {account?.phoneNumber}</Text>
    </View>
  );
};

export default ProfileScreen;
