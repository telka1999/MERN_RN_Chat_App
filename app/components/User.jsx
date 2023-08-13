import { StyleSheet, Text, View, Pressable, Image } from "react-native";
export const User = ({ item, btnName }) => {
  return (
    <Pressable
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}
    >
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            resizeMode: "cover",
          }}
          source={require("../assets/favicon.png")}
        />
      </View>
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ marginTop: 4, color: "gray" }}>{item.email}</Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#82CD47",
          padding: 10,
          width: 105,
          borderRadius: 6,
        }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>{btnName}</Text>
      </Pressable>
    </Pressable>
  );
};
const style = StyleSheet.create({});
