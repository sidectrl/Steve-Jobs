import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Result } from "../../models/Data";
import { HeartButton } from "../HeartButton/HeartButton";

import { useSelector } from "react-redux";
import { BookmarkProps } from "../../redux/actions/bookmarkActions";

interface Props {
  item: Result;
  index: number;
  disabled?: boolean;
  onPress?: () => void;
}
const Card = ({ item, index, disabled, onPress }: Props) => {
  const { bookmarks } = useSelector(
    (state: { bookmarkReducer: BookmarkProps }) => state.bookmarkReducer
  );
  const isFavorite = bookmarks.some(
    (bookmark) => bookmark.id.value+bookmark.id.name === item.id.value+item.id.name
  );
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
        isFavorite={isFavorite}
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
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    width: "40%",
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
    marginLeft: 14
  },
  card: {
    flexDirection: "row",
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 80,
  },
});

export default Card;
