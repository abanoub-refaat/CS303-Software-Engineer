import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Item from "./Item";
import lemon from "../assets/lemon.png";
import mango from "../assets/mango.png";

export default function SimpleScrollView() {
  const initialValue = [
    { id: 1, text: "1234", icon: lemon },
    { id: 2, text: "lemon", icon: mango },
    { id: 3, text: "mango", icon: lemon },
    { id: 4, text: "456", icon: mango },
    { id: 5, text: "Mohamed", icon: lemon },
    { id: 6, text: "apple", icon: lemon },
    { id: 7, text: "banana", icon: mango },
    { id: 8, text: "orange", icon: lemon },
    { id: 9, text: "grape", icon: mango },
    { id: 10, text: "watermelon", icon: lemon },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>First App</Text>
      <ScrollView contentContainerStyle={styles.items}>
        {initialValue.map((e) => (
          <Item text={e.text} iconSrc={e.icon} key={e.id} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  items: {
    padding: 2,
  },
});
