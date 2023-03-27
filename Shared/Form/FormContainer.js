import { ScrollView, Dimensions, StyleSheet, Text } from "react-native";

let { width } = Dimensions.get("window");

const FormContainer = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 400,
    marginTop: 30,
    width: width,
  },
  title: {
    fontSize: 30,
  },
});

export default FormContainer;
