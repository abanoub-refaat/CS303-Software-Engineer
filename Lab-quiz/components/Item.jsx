import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Item({ iconSrc, text }) {
  return (
    // <View style={styles.item}>
    <Pressable onPress={() => alert(text)} style={styles.item}>
      <Image source={iconSrc} style={styles.image} />
      <Text style={styles.title}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 50,
    height: 50,
  },
});
