import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import { CustomScreenFC} from "../models/ScreenFC";
import { styles } from "./SignUp";
import Icon from "react-native-vector-icons/FontAwesome";
const InfoScreen: CustomScreenFC<"Info"> = () => {
  const supportedURL = "https://google.com";
  const privacyPolicy = async () => {
    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
      await Linking.openURL(`https://www.termsfeed.com/live/eea267b2-2d2a-4324-812d-1c7015285c4e`);
    }
  };
  return (
    <View style={styles.container}>
      <Image style={{width: 150, height: 150, borderRadius:80}} source={require('../images/devloperImage.jpg')}/>
        <Text style={{fontSize: 25}}><Icon name='user' size={25} /> Francesco Limonelli</Text>
        <TouchableOpacity onPress={privacyPolicy}><Text style={{color:'blue', textDecorationLine:'underline'}}>Privacy policy</Text></TouchableOpacity>
    </View>
  );
};
export default InfoScreen;