import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarActiveTintColor
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      {/* //   <Tab.Screen
  //     name="Home"
  //     component={HomeNavigator}
  //     options={{
  //       tabBarIcon: ({ color }) => (
  //         <Icon
  //         name="home"
  //         style={{ position: "relative" }}
  //         color={color}
  //         size={30}
  //     />
  //     )
  //   }}
  //   /> */}
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
