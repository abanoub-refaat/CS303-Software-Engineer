// App.js
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";
import PressableVsButton from "./components/PressableVsButton";
import SimpleScrollView from "./components/SimpleScrollView";
import SimpleFlatList from "./components/SimpleFlatList";
import LoginScreen from "./components/Login";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the user is logged in
  const [visibleComponent, setVisibleComponent] = useState(0);

  const compArray = [
    PressableVsButton,
    SimpleScrollView,
    SimpleFlatList,
    LoginScreen,
  ];
  const Comp = compArray[visibleComponent];

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setVisibleComponent(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <Pressable
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.navButtonPressed,
          ]}
          onPress={() => {
            if (isAuthenticated) {
              setVisibleComponent(
                (v) => (v - 1 + compArray.length) % compArray.length
              );
            }
          }}
          disabled={!isAuthenticated}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.navButtonPressed,
          ]}
          onPress={() => {
            if (isAuthenticated) {
              setVisibleComponent((v) => (v + 1) % compArray.length);
            }
          }}
          disabled={!isAuthenticated} // Disable the button if not authenticated
        >
          <Text style={styles.navButtonText}>Next</Text>
        </Pressable>
      </View>

      <View style={styles.component}>
        {isAuthenticated ? (
          <Comp />
        ) : (
          <LoginScreen onLoginSuccess={handleLoginSuccess} />
        )}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  navButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  navButtonPressed: {
    opacity: 0.6,
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  component: {
    flex: 1,
  },
});
