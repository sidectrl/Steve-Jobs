import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { ScreenFC } from "../models/ScreenFC";

import { HeartButton } from "../components/HeartButton/HeartButton";
import { styles } from "./SignUp";

const DetailScreen: ScreenFC<"Detail"> = ({ route, navigation }) => {
  const { data } = route.params;
  const supportedURL = "https://google.com";

  const callNumber = async () => {
    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
      // await Linking.openURL(supportedURL);
      // await Linking.openSettings();
      await Linking.openURL(`tel:${data?.cell}`);
    }
  };
  const sendMail = async () => {
    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
      await Linking.openURL(`mailto:${data?.email}`);
    }
  };
  return (
    <View style={styles2.container}>
      <Image source={{ uri: data?.picture.large }} style={styles2.image} />
      <Text>{data?.name.first} {data?.name.last}</Text>
      <Text>{data?.dob.date}</Text>
      <Text>{data?.location.country}, {data?.location.city}</Text>
      <Text style={styles.datePickerStyle} onPress={sendMail}>{data?.email}</Text>
      <Text style={styles.datePickerStyle} onPress={callNumber}>{data?.cell}</Text>
      <HeartButton
        item={data}
      />
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 80,
  },
});

export default DetailScreen;
