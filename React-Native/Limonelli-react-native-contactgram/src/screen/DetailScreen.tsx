import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { ScreenFC } from "../models/ScreenFC";

import { HeartButton } from "../components/HeartButton/HeartButton";
import { styles } from "./SignUp";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <Text style={styles2.fontInfo}><Icon name='user' size={25} /> {data?.name.first} {data?.name.last}</Text>
      <Text style={styles2.fontInfo}><Icon name='calendar' size={25} /> {data?.dob.date}</Text>
      <Text style={styles2.fontInfo}><Icon name='map-marker' size={25} /> {data?.location.country}, {data?.location.city}</Text>
      <Text style={[styles.datePickerStyle, styles2.fontInfo]} onPress={sendMail}><Icon name='envelope-o' size={25} /> {data?.email}</Text>
      <Text style={[styles.datePickerStyle, styles2.fontInfo]} onPress={callNumber}><Icon name='phone' size={25} /> {data?.cell}</Text>
      <HeartButton
        item={data}
      />
    </View>
  );
};

export const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 80,
  },
  fontInfo:{
    fontSize: 20,
    paddingVertical: 10
  }
});

export default DetailScreen;
