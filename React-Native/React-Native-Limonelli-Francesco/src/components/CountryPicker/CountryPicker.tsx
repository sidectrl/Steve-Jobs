import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'

type CountryPickProps = {
    country?: Country
    setCountry: React.Dispatch<React.SetStateAction<Country | undefined>>
}

export default function CountryPick({country, setCountry }: CountryPickProps) {
    const [countryCode, setCountryCode] = useState<CountryCode>('IT')
    const onSelect = (country: Country) => {
        setCountryCode(country.cca2)
        setCountry(country)
      }
    return (
        <View>
            <Text>Select your Country</Text>
            <CountryPicker
                withFilter
                withFlag
                withCountryNameButton
                withAlphaFilter
                withEmoji
                countryCode={countryCode}
                onSelect={onSelect}
            />
        </View>
    );
}