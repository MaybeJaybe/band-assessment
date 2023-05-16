import React from "react";
import { Text, StyleSheet, View } from "react-native";

function StyleBand({name}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.border}/>
    </View>
  )
}

export default StyleBand

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  border: {
    borderBottomColor: "#999",
    borderBottomWidth: 2,
  }
})