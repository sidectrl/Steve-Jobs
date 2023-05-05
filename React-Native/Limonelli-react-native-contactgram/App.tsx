import NavigationProvider from "./src/navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/index";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationProvider />
      </PersistGate>
    </Provider>
  );
};
export default App;
