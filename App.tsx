import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AnimatedScratchedCard from "./src/animation/AnimatedScratchedCard";
export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedScratchedCard />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
