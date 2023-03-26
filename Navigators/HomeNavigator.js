import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return null;
  // <Stack.Navigator>
  //   <Stack.Screen
  //   name="Home"
  //   component={}
  //   options={{
  //     headerShown: false,
  //   }}
  //    />
  // </Stack.Navigator>
}

export default function HomeNavigator() {
  return <MyStack />;
}
