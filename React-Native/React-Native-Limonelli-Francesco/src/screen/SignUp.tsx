import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { ScreenFC } from "../models/ScreenFC";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/accountActions";
import { DateCard } from "../components/DatePicker/DateCard";
import { Country } from "react-native-country-picker-modal";
import CountryPick from "../components/CountryPicker/CountryPicker";


const SignUp: ScreenFC<"SignUp"> = ({ navigation }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [date, setDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [country, setCountry] = useState<Country>()
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrati</Text>
      <TextInput
        placeholder="email"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="password"
        onChangeText={(value) => setPassword(value)}
      />
      <DateCard date={date} setDate={setDate} />
      <TextInput
        placeholder="phone number"
        onChangeText={(value) => setPhoneNumber(value)} />
      <CountryPick
      country={country}
      setCountry={setCountry}
      />

      <Button
        title="Registrati"
        color="red"
        onPress={() => {
          email &&
            password &&
            date &&
            phoneNumber &&
            country &&
            dispatch(signUp({ email, password, date, phoneNumber,country, isLogged: true }));
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Hai un account?</Text>
        <Button title="Accedi" onPress={() => navigation.navigate("Login")} />
      </View>
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
  title: {
    fontSize: 20,
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