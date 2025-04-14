import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
  Image,
} from "react-native";

import lemon from "../assets/lemon.png";
import mango from "../assets/mango.png";

const ItemManager = () => {
  const [items, setItems] = useState([
    { id: "1", text: "lemon", icon: lemon },
    { id: "2", text: "mango", icon: mango },
  ]);
  const [newItemText, setNewItemText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const addItem = () => {
    if (!newItemText.trim()) return;

    const newItem = {
      id: Date.now().toString(),
      text: newItemText,
      icon: items.length % 2 === 0 ? lemon : mango,
    };

    setItems([...items, newItem]);
    setNewItemText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.icon} style={styles.itemIcon} />
      <Text style={styles.itemText}>{item.text}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.deleteButton,
          { opacity: pressed ? 0.6 : 1 },
        ]}
        onPress={() => deleteItem(item.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search items..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.addItemContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter new item"
          value={newItemText}
          onChangeText={setNewItemText}
          onSubmitEditing={addItem}
        />
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            { opacity: pressed ? 0.6 : 1 },
          ]}
          onPress={addItem}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
  },
  searchInput: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  addItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  itemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#f44336",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: "white",
    fontSize: 14,
  },
  list: {
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
});

export default function PressableVsButton() {
  return <ItemManager />;
}
