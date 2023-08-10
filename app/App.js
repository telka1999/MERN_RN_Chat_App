import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch("http://10.0.2.2:5000/api/users/register", {
        method: "POST",
        redirect: "follow",
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>MERN RN Firebase Chat App data: {data?.message}</Text>
      <StatusBar style="auto" />
      <Button onPress={fetchData} title="Click" />
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
