import { Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Input = (props) => {
  return (
    <TextInput
      autoCorrect={props.autoCorrect}
      id={props.id}
      keyboardType={props.keyboardType}
      name={props.name}
      onChangeText={props.onChangeText}
      onFocus={props.onFocus}
      placeholder={props.placeholder}
      style={styles.input}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    height: 60,
    margin: 10,
    padding: 10,
    width: "80%",
  },
});

export default Input;
