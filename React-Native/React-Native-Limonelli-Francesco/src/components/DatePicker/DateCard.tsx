import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { View , Text, TouchableOpacity} from 'react-native';
import { styles } from '../../screen/SignUp';
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
      display:'spinner',
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={{alignItems:'center'}}>
      <Text style={styles.subTitle}>Enter the date</Text>
      <TouchableOpacity onPress={showDatepicker}><Text style={styles.datePickerStyle}>selected: {date.toLocaleString()}</Text></TouchableOpacity>
    </View>
  );
};
