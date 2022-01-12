import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "./components";

import Login from "./views/Login";

export default function App() {
  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
