
import { CustomScreenFC } from '../models/ScreenFC'
import { useDispatch, useSelector } from 'react-redux';
import { AccountProps, editAccount, signUp } from '../redux/actions/accountActions';
import { Button, TextInput, View, Text } from 'react-native';
import { DateCard } from '../components/DatePicker/DateCard';
import CountryPick from '../components/CountryPicker/CountryPicker';
import { useState } from 'react';
import { Country } from 'react-native-country-picker-modal';
import { styles } from './SignUp';

export const EditScreen: CustomScreenFC<"EditProfile"> = () => {
    const { account } = useSelector(
        (state: { accountReducer: AccountProps }) => state.accountReducer
    );
    const dispatch = useDispatch();
    const [name, setName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [date, setDate] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [country, setCountry] = useState<Country>()
    return (
        <View style={styles.container}>
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
            <Text>Telepho:</Text>
            <TextInput
                placeholder={account?.phoneNumber}
                onChangeText={(value) => setPhoneNumber(value)} />
            <CountryPick
                country={account?.country}
                setCountry={setCountry}
            />

            <Button
                title="Save"
                color="red"
                onPress={() => {
                    name &&
                    lastName &&
                    email &&
                        password &&
                        date &&
                        phoneNumber &&
                        country &&
                        dispatch(editAccount({name, lastName, email, password, date, phoneNumber, country, isLogged: true }));
                }}
            />
        </View>
    )
}

export default EditScreen