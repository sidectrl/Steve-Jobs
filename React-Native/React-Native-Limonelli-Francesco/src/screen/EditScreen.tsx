
import { CustomScreenFC } from '../models/ScreenFC'
import { useDispatch, useSelector } from 'react-redux';
import { AccountProps, editAccount, signUp } from '../redux/actions/accountActions';
import { Button, TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { DateCard } from '../components/DatePicker/DateCard';
import CountryPick from '../components/CountryPicker/CountryPicker';
import { useEffect, useState } from 'react';
import { Country } from 'react-native-country-picker-modal';
import { styles } from './SignUp';
import * as ImagePicker from "expo-image-picker";

export const EditScreen: CustomScreenFC<"EditProfile"> = ({navigation}) => {
    const { account } = useSelector(
        (state: { accountReducer: AccountProps }) => state.accountReducer
    );
    const dispatch = useDispatch();

    const [image, setImage] = useState<string>();
    const [name, setName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [date, setDate] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [country, setCountry] = useState<Country>()
    const [city, setCity] = useState<string>();

    useEffect(() => {
        setImage(account.image)
        setName(account.name);
        setLastName(account.lastName);
        setEmail(account.email);
        setPassword(account.password);
        setPhoneNumber(account.phoneNumber);
        setCountry(account.country);
        setCity(account.city);
        account.date ? setDate(new Date(account?.date)) : null;
    }, []);

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
    const handleSubmit = () => {
        dispatch(
            editAccount({ name, lastName, email, password, date, phoneNumber, country, city, image, isLogged: true }));
            navigation.navigate("Profile");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit account</Text>

            <TouchableOpacity onPress={pickImage}>{image ? <Image alt="image" source={{ uri: image }} style={{ width: 150, height: 150, borderRadius:80 }} /> : <Text style={styles.subTitle}>Click to select image</Text>}</TouchableOpacity>
            <Text>Name:</Text>
            <TextInput
                placeholder={account?.name}
                onChangeText={(value) => setName(value)}
            />
            <Text>Last name:</Text>
            <TextInput
                placeholder={account?.lastName}
                onChangeText={(value) => setLastName(value)}
            />
            <Text>Email:</Text>
            <TextInput
                placeholder={account?.email}
                onChangeText={(value) => setEmail(value)}
            />
            <Text>Password:</Text>
            <TextInput
                placeholder={account?.password}
                onChangeText={(value) => setPassword(value)}
            />
            <Text>Telephone:</Text>
            <TextInput
                placeholder={account?.phoneNumber}
                onChangeText={(value) => setPhoneNumber(value)} />
            <CountryPick
                country={account?.country}
                setCountry={setCountry}
            />
            <DateCard date={date} setDate={setDate} />
            <TextInput
                placeholder={account?.city}
                onChangeText={(value) => setCity(value)}
            />
            <Button
                title="Save"
                color="blue"
                onPress={handleSubmit}
            />
        </View>
    )
}

export default EditScreen