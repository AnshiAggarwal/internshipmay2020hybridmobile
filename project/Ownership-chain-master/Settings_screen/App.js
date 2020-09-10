import React from "react";
import { ImageBackground, StyleSheet, Text,TextInput, View, Button, TouchableOpacity } from "react-native";


export default App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./background.jpeg')} style={styles.image}>
      <Text style={styles.heading}>Username</Text>
      <Text style={styles.options}>Account</Text>
      <Text style={styles.options}>Display</Text>
      <Text style={styles.options}>Privacy</Text>
      <Text style={styles.options}>About Us</Text>
      <Text style={styles.options}>Log Out</Text>
      <View style = {styles.changeButton}>
        <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                      <Text style={styles.buttonText}>Save Changes</Text>
                  </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  heading: {
    marginTop:50,
    marginLeft: "8%",
    color: "black",
    fontSize: 25,
    fontWeight: "bold"
  },
  options:{
    marginLeft: "8%",
    color: "black",
    fontSize: 22
  },
  button:{
    borderRadius:"25%",
    width:"35%",
    height:35,
    backgroundColor: "#6960EC",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    padding: 8
  },
  changeButton: {
    alignItems: "center",
    marginTop: 60
  }
});
