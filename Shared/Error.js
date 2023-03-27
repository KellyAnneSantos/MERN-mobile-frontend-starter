import { StyleSheet, Text, View } from "react-native";

const Error = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    width: "100%",
  },
  text: {
    color: "red",
  },
});

export default Error;
