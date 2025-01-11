import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Student from "./Student";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "Govind" };
  }

  updateName = (val) => {
    this.setState({ name: val });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <TextInput
          placeholder="Enter your name"
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />
        <Button title="Press Me" onPress={() => alert("Button Pressed!")} />
        <Student name={this.state.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
  },
});

export default App;
