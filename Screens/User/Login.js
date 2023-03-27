import { Button, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credential");
    } else {
      console.log("success");
    }
  };

  return (
    <FormContainer title={"Login"}>
      <Input
        // id={"email"}
        name={"email"}
        onChangeText={(text) => setEmail(text)}
        placeholder={"Enter email"}
        value={email}
      />
      <Input
        // id={"password"}
        name={"password"}
        onChangeText={(text) => setPassword(text)}
        placeholder={"Enter password"}
        secureTextEntry={true}
        value={password}
      />
      <View style={StyleSheet.buttonGroup}>
        {error ? <Error message={error} /> : null}
        <Button title="Login" onPress={() => handleSubmit()} />
      </View>
      <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
        <Text style={styles.middleText}>New user?</Text>
        <Button
          onPress={() => props.navigation.navigate("Register")}
          title="Register"
        />
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    alignItems: "center",
    width: "80%",
  },
  middleText: {
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default Login;
