import React, { useState } from "react";
import { View, Text, TextInput, Button, ImageBackground, Image } from "react-native";
import { ScreenFC } from "../models/ScreenFC";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/accountActions";
import { styles } from "./SignUp";
const Login: ScreenFC<"Login"> = ({ navigation }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../images/backgroundLogin.jpeg')} style={{ flex: 1 }}>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Image style={{marginBottom:10}} source={require('../images/Contactgram2.png')}/>
          <Text style={styles.subTitle}>Accedi</Text>
          <TextInput 
          style={{fontSize:25}}
            placeholder="email"
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
          style={{fontSize:25}}
            placeholder="password"
            onChangeText={(value) => setPassword(value)}
          />
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
          <Button
            title="Accedi"
            onPress={() => {
              email &&
                password &&
                dispatch(login({ email, password, isLogged: true }));
            }}
          />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Text style={{fontSize:25}}>Non hai un account? </Text>
            <Button
              title="Registrati"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
