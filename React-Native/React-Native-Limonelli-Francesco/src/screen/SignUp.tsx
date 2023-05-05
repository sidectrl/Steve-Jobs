import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import { ScreenFC } from "../models/ScreenFC";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/accountActions";
import { DateCard } from "../components/DatePicker/DateCard";
import { Country } from "react-native-country-picker-modal";
import CountryPick from "../components/CountryPicker/CountryPicker";
import * as ImagePicker from "expo-image-picker";


const SignUp: ScreenFC<"SignUp"> = ({ navigation }) => {
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [date, setDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [country, setCountry] = useState<Country>()
  const [image, setImage] = useState<string>();
  const [city, setCity] = useState<string>();
  const dispatch = useDispatch();

  const pickImage = async () => {
    ImagePicker.requestMediaLibraryPermissionsAsync()
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../images/backgroundLogin.jpeg')} style={{ flex: 1 }}>
        <View style={styles.container}>
      <Text style={styles.title}>Registrati</Text>
      <TouchableOpacity onPress={pickImage}>{image ? <Image alt="image" source={{ uri: image }} style={{ width: 200, height: 200 }} /> : <Text style={styles.subTitle}>Click to select image</Text>}</TouchableOpacity>
      <TextInput
        placeholder="name"
        style={{fontSize:25}}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="last name"
        style={{fontSize:25}}
        onChangeText={(value) => setLastName(value)}
      />
      <TextInput
        placeholder="email"
        style={{fontSize:25}}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="password"
        style={{fontSize:25}}
        onChangeText={(value) => setPassword(value)}
      />
      <DateCard date={date} setDate={setDate} />
      <TextInput
        placeholder="phone number"
        style={{fontSize:25}}
        onChangeText={(value) => setPhoneNumber(value)} />
      <CountryPick
        country={country}
        setCountry={setCountry}
      />
      <TextInput
        placeholder="city"
        style={{fontSize:25, marginBottom:10}}
        onChangeText={(value) => setCity(value)}
      />
      <Button
        title="Registrati"
        onPress={() => {
          name &&
            lastName &&
            email &&
            password &&
            date &&
            phoneNumber &&
            country &&
            city &&
            image &&
            dispatch(signUp({ name, lastName, email, password, date, phoneNumber, country, city, image, isLogged: true }));
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
        <Text style={{fontSize:25}}>Hai un account? </Text>
        <Button title="Accedi" onPress={() => navigation.navigate("Login")} />
      </View>
      </View>
      </ImageBackground>
    </View>
  );
};
export default SignUp;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    color: 'blue'
  },
  text: {
    width: 230,
    fontSize: 16,
    color: "#000"
  }
});