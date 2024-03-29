import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useState } from "react";
import RootStackParams from "../models/RootStackParams";
import DetailScreen from "../screen/DetailScreen";
import InfoScreen from "../screen/InfoScreen";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screen/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ROUTES from "./routes";
import { useDispatch, useSelector } from "react-redux";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import { AccountProps, deleteAccount, logout } from "../redux/actions/accountActions";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Modal, View, StyleSheet, Text } from "react-native";
import EditScreen from "../screen/EditScreen";
import HomePage from "../screen/HomePage";
import Favorites from "../screen/Favorites";

const RootStack = createStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const MainStack: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.Login}
        component={Login}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#292a39" },
        }}
      />
      <RootStack.Screen
        name={ROUTES.SignUp}
        component={SignUp}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#292a39" },
        }}
      />
    </RootStack.Navigator>
  );
};

const TabNavigation: React.FC = () => {

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Home}
      screenOptions={{
        headerTintColor: "#f06616",
        headerStyle: { backgroundColor: "#292a39" },
        tabBarActiveTintColor: "#f06616",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={ROUTES.HomePage}
        component={HomePage}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Profile}
        component={DrawerMenu}
        options={{
          headerShown: false,
          headerTintColor: "#f06616",
          headerStyle: { backgroundColor: "#292a39" },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerMenu: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { account } = useSelector(
    (state: { accountReducer: AccountProps }) => state.accountReducer
  );
  const dispatch = useDispatch();
  const confirmDelete = () => {
    dispatch(deleteAccount(account));
    dispatch(logout());
    setModalVisible(false);
  };
  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <Button
          title="Logout"

          color={'red'}
          onPress={() => dispatch(logout())}
        />
        <Button
          title="Delete account"
          color={'red'}
          onPress={() => setModalVisible(true)}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalView}>
            <Text style={{fontSize:20}}>Are you sure you want to delete your account?</Text>
            <View style={styles.modalButtons}>
              <Button
                title="Yes"
                onPress={() => confirmDelete()}
              /> 
              <Text>    </Text>
              <Button
                title="No"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </DrawerContentScrollView>
    );
  };
  return (
    <>
      {account && account.isLogged ? (
        <Drawer.Navigator
          initialRouteName="Profile"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name={ROUTES.Profile}
            component={ProfileScreen}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name={ROUTES.Favorite}
            component={Favorites}
          />
          <Drawer.Screen name={ROUTES.EditProfile} component={EditScreen} />
          <Drawer.Screen name={ROUTES.Info} component={InfoScreen} />
        </Drawer.Navigator>
      ) : (
        <MainStack />
      )}
    </>
  );


};

const HomeStack: React.FC = () => {
  const { account } = useSelector(
    (state: { accountReducer: AccountProps }) => state.accountReducer
  );
  return (
    <NavigationContainer>
      {account && account.isLogged ? (
        <RootStack.Navigator>
        <RootStack.Screen
          name={ROUTES.Home}
          component={TabNavigation}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#292a39" },
          }}
        />
        <RootStack.Screen name={ROUTES.Detail} component={DetailScreen} />
      </RootStack.Navigator>
		
        ) : (
          <MainStack />
        )}
      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default HomeStack
