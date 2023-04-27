import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Button, View , Text} from 'react-native';
type DateProps= {
date : Date;
setDate : React.Dispatch<React.SetStateAction<Date>>
}
export const DateCard = ({date, setDate}: DateProps) => {
  

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <Button onPress={showDatepicker} title="Enter the date" />
      <Text>selected: {date.toLocaleString()}</Text>
    </View>
  );
};
