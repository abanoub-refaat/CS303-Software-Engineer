import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import lemon from "../assets/lemon.png";
import mango from "../assets/mango.png";

const DATA = [
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

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default function SimpleFlatList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item text={item.text} iconSrc={item.icon} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
