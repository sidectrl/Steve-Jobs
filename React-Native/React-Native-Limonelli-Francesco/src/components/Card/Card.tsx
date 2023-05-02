import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Result } from "../../models/Data";
import { HeartButton } from "../HeartButton/HeartButton";

interface Props {
  item: Result;
  index: number;
  disabled?: boolean;
  onPress?: () => void;
}
const Card = ({ item, index, disabled, onPress }: Props) => {
  return (
    <TouchableOpacity
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
        <HeartButton 
        item={item}
        />
        <View style={styles.card}>
          
        </View>
      </View>
    </TouchableOpacity>
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

export default Card;
