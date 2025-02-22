import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function Game() {
  const [guess, setGuess] = useState(Math.floor(Math.random() * 99));
  const [answer, setAnswer] = useState(0);
  const [status, setStatus] = useState("Start the game by entering a guess!");
  const [countGuess, setCountGuess] = useState(0);
  const [highScore, setHighScore] = useState(100000);

  const checkAnswer = () => {
    setCountGuess(countGuess + 1);
    console.log(guess);
    console.log(answer);
    if (answer === guess) {
      setStatus("You are correct!");
      if (highScore > countGuess) setHighScore(countGuess);
    } else if (answer > guess) {
      setStatus("Lower!");
    } else if (answer < guess) {
      setStatus("Higher!");
    }
  };

  const GameReset = () => {
    setStatus("Start the game by entering a guess!");
    setAnswer(0);
    setGuess(Math.floor(Math.random() * 99));
    setCountGuess(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <Text>Enter your guess between 0 and 99:</Text>
        <View style={styles.inputCheckContainer}>
          <TextInput
            placeholder="Enter your guess ..."
            style={styles.inputText}
            value={answer.toString()}
            onChangeText={(text) => setAnswer(Number(text))}
            keyboardType="numeric"
          />
          <Button title="CHECK" onPress={checkAnswer} />
        </View>
      </View>
      <View style={{ margin: 5 }}>
        <Text>Your Guesses: {countGuess}</Text>
        <Text>Your Highscore: {highScore === 100000 ? "" : highScore}</Text>
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.checkText}>{status}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="RESET" onPress={GameReset} style={styles.resetButton} />
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
