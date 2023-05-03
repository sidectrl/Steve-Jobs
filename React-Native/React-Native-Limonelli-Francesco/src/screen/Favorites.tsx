import React from "react";
import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";
import { useDispatch, useSelector } from "react-redux";
import { Result } from "../models/Data";
import {
  BookmarkProps,
  removeAllBookmark,
  removeBookmark,
} from "../redux/actions/bookmarkActions";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FavoriteCard from "../components/Card/FavoriteCard";


const Favorites: CustomScreenFC<"Favorite"> = ({ navigation }) => {
  const { bookmarks } = useSelector(
    (state: { bookmarkReducer: BookmarkProps }) => state.bookmarkReducer
  );

  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: "#fc8386",
        paddingHorizontal: 20,
        flex: 1,
      }}
    >
      {bookmarks.length > 0 ? (
        <View>
          <TouchableOpacity
            style={{ paddingVertical: 20, alignItems: "flex-end" }}
            activeOpacity={0.4}
            onPress={() => dispatch(removeAllBookmark())}
          >
            <MaterialCommunityIcons name="delete" color="red" size={30} />
          </TouchableOpacity>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              elevation: 2,
              shadowColor: "black",
              shadowOffset: {
                height: 10,
                width: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1,
              marginTop: -20,
            }}
          >
            {bookmarks?.map((item: Result, index: number) => {
              return (
                <FavoriteCard
                  item={item}
                  index={index}
                  key={`key-${index}`}
                  disabled
                  onPress={() => navigation.navigate("Detail", { id: item.id.name, data: item })}
                />
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "#000000", fontSize: 20 }}>
            No Bookmark present
          </Text>
        </View>
      )}
    </View>
  );
};

export default Favorites;
