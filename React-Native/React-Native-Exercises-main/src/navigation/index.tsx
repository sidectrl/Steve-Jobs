import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RootStackParams from "../models/RootStackParams";
import DetailScreen from "../screen/DetailScreen";
import HomeScreen from "../screen/HomeScreen";
import SettingScreen from "../screen/SettingScreen";

const RootStack = createStackNavigator<RootStackParams>();

const NavigationProvider: React.FC = () => {
  return (

      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "rgb(79,172,217)" },
          }}
        />
        <RootStack.Screen name="Detail" component={DetailScreen} />
        <RootStack.Screen name="Setting" component={SettingScreen} />
      </RootStack.Navigator>

  );
};
export default NavigationProvider;
