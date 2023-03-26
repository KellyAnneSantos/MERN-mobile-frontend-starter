import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigators/Main";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
