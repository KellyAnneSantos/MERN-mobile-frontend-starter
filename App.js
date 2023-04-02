import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigators/Main";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <Toast ref={(innerRef) => Toast.setRef(innerRef)} />
    </NavigationContainer>
  );
}
