import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screen/User/Login";
import Register from "../Screens/User/Register";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <MyStack />;
}
