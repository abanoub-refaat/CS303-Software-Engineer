import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Button,
  Text,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");

  const addItem = (text) => ({
    id: `${Date.now()}-${Math.random()}`, // Ensuring uniqueness
    title: text,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter item value"
          onChangeText={(text) => setTxt(text)}
          value={txt}
        />
        <Button
          title="ADD"
          onPress={() => {
            if (txt.trim()) {
              setData([...data, addItem(txt)]);
              setTxt(""); // Clear input
            }
          }}
        />
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 200,
    padding: 10,
    borderColor: "black",
    borderRadius: 12,
    flexDirection: "row",
  },
  input: {
    padding: 5,
    width: 300,
    borderColor: "blue",
    borderWidth: 1,
    marginRight: 10,
  },
  flatlist: {
    marginTop: 20,
  },
});
