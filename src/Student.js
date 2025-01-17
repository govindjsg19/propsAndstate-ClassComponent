import React, { Component } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const logoUri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zM320.8 78.4z"/></g></svg>`;

function Link(props) {
  return <Text {...props} style={[styles.link, props.style]} />;
}

class Student extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.title}>Student Class Component</Text>
        <Image source={{ uri: logoUri }} style={styles.logo} />
        <Pressable style={buttonStyles.button}>
          <Text style={buttonStyles.text}>Press Me: {this.props.name}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20,
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
    textDecorationLine: "underline",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#5DE2E7",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Student;
