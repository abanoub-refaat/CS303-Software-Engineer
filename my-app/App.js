import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Item,
} from "react-native";
import { useState } from "react";
import icon from "./assets/icon.png";
import icon2 from "./assets/adaptive-icon.png";

export default function App() {
  const initialValue = [
    { text: "23425", image: icon },
    { text: "3525345", image: icon2 },
    { text: "dfdfsi", image: icon2 },
    { text: "dfsijdfl", image: icon },
    { text: "dfkjlk", image: icon2 },
    { text: "dfdfs", image: icon },
    { text: "35dasfd25345", image: icon2 },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Scroll View Component</Text>
        <ScrollView>
          {initialValue.map((e, index) => (
            <Item text={e.text} iconSrc={e.image} key={index} />
          ))}
        </ScrollView>
      </View>
      <View>
        <Text>FlatList</Text>
        <FlatList
          data={initialValue}
          renderItem={({ item }) => (
            <Item text={item.text} iconSrc={item.icon} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  inputCheckContainer: {
    flexDirection: "row",
    width: 200,
    marginTop: 15,
  },
  inputText: {
    width: 150,
    borderWidth: 0.5,
    backgroundColor: "#fff",
    padding: 10,
  },
  checkContainer: {
    backgroundColor: "lightblue",
    borderRadius: 16,
    padding: 15,
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 26,
  },
  checkText: {
    fontSize: 20,
  },
});
