import React from "react";
import { TouchableOpacity, View, Image, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Result } from "../../models/Data";
import { HeartButton } from "../HeartButton/HeartButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { removeBookmark } from "../../redux/actions/bookmarkActions";
import { useDispatch } from "react-redux";

interface Props {
  item: Result;
  index: number;
  disabled?: boolean;
  onPress?: () => void;
}
const FavoriteCard = ({ item, index, disabled, onPress }: Props) => {
  const dispatch = useDispatch();
  return (
    <TouchableHighlight
      onLongPress={() => dispatch(removeBookmark(item.id.name))}
      activeOpacity={0.5}
      key={`key-${index}`}
      onPress={onPress}
      disabled={disabled && !onPress}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: item?.picture?.large,
          }}
          style={styles.image}
        />
        <View>
          <Text style={{ fontSize: 20, marginVertical: 10 }} ><Icon name='user' size={25} /> {[item?.name.first, " ", item?.name.last]} </Text>
          <Text><Icon name='phone' size={15} /> {item?.cell} </Text>
        </View>
        <View style={styles.card}>

        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 170,
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 80,
  },
  description: {
    fontWeight: "bold",
    padding: 4,
  },
  tail: {
    padding: 4,
    width: 120,
  },
});

export default FavoriteCard;