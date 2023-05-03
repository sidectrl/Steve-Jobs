import { View, Text, StyleSheet, Image } from "react-native";
import { ScreenFC } from "../models/ScreenFC";

import { HeartButton } from "../components/HeartButton/HeartButton";

const DetailScreen: ScreenFC<"Detail"> = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: data?.picture.large }} style={styles.image} />
      <Text>{data?.name.first} {data?.name.last}</Text>
      <Text>{data?.dob.date}</Text>
      <Text>{data?.location.country}, {data?.location.city}</Text>
      <Text>{data?.email}</Text>
      <Text>{data?.cell}</Text>
      <HeartButton
        item={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
