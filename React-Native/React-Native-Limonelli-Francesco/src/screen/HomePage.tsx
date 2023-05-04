import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import Card from "../components/Card/Card";
import { Data } from "../models/Data";
import { CustomScreenFC, ScreenFC } from "../models/ScreenFC";
import axios from "axios";

const HomePage:  CustomScreenFC<"Home"> = ({ navigation }) => {
  const [state, setState] = useState<Data>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://randomuser.me/api/?results=24&seed=contactgram&nat=us,fr,gb&exc=login,registered&noinfo`)
      console.log(data)
      setState(data)
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
      </View>
      <View style={styles.shadow}>
        {state ? (
          <FlatList
            data={state.results}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card
                item={item}
                index={index}
                onPress={
                  () => {
                    navigation.navigate("Detail", { id: item.id.name, data: item });
                  }
                }
              />
            )}
          />)
          : (
            <View style={styles.cardContainer}>
              <Text>No result</Text>
            </View>
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(79,172,217)",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  shadow: {
    elevation: 2,
    shadowColor: "black",
    shadowOffset: {
      height: 20,
      width: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  cardContainer: {
    backgroundColor: "#fff",
    height: 170,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
