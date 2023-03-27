import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (email === "" || name === "" || password === "") {
      setError("Please fill in all the blanks");
    }

    let user = {
      name,
      email,
      password,
      role: 0,
    };

    axios
      .post(`${baseURL}users/register`, user)
      .then((res) => {
        if (res.status == 200) {
          setTimeout(() => {
            props.navigation.navigate("Login");
          }, 500);
        }
      })
      .catch((error) => {});
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Register"}>
        <Input
          placeholder={"Email"}
          name={"email"}
          // id={"email"}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <Input
          placeholder={"Name"}
          name={"name"}
          // id={"name"}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder={"Password"}
          name={"password"}
          // id={"password"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <View>{error ? <Error message={error} /> : null}</View>
        <View style={styles.buttonGroup}>
          <Button title={"Register"} onPress={() => handleSubmit()} />
        </View>
        <View>
          <Button
            title={"Back to Login"}
            onPress={() => props.navigation.navigate("Login")}
          />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    margin: 10,
    alignItems: "center",
  },
});

export default Register;
