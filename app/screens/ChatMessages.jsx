import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const messages = [
  { message: null, userId: 1, image: true },
  { message: "Jakaś wiadomość", userId: 1, image: false },
  { message: "Jakaś wiadomość", userId: 2, image: false },
  { message: "Jakaś wiadomość", userId: 1, image: false },
  { message: "Jakaś wiadomość", userId: 2, image: false },
];
export const ChatMessages = () => {
  const userId = 1;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            onPress={() => navigation.navigate("Chats")}
            name="arrow-back"
            size={24}
            color="black"
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                resizeMode: "cover",
              }}
              source={require("../assets/favicon.png")}
            />
            <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
              Friend One
            </Text>
          </View>
        </View>
      ),
    });
  }, []);
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {messages.map((item, i) => {
          const messageItem = () => {
            if (item.image) {
              return (
                <Image
                  source={require("../assets/splash.png")}
                  style={{ width: 200, height: 200, borderRadius: 7 }}
                />
              );
            } else {
              return (
                <Text
                  style={{
                    fontSize: 13,
                    textAlign: "left",
                  }}
                >
                  {item.message}
                </Text>
              );
            }
          };
          return (
            <View
              key={i}
              style={
                item.userId === userId
                  ? {
                      alignSelf: "flex-end",
                      backgroundColor: "#DCF8C6",
                      padding: 8,
                      maxWidth: "60%",
                      borderRadius: 7,
                      margin: 10,
                    }
                  : {
                      alignSelf: "flex-start",
                      backgroundColor: "white",
                      padding: 8,
                      margin: 10,
                      borderRadius: 7,
                      maxWidth: "60%",
                    }
              }
            >
              {messageItem()}
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#dddddd",
          gap: 12,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#dddddd",
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
          placeholder="Type Your message..."
        />
        <Pressable>
          <Entypo name="image-inverted" size={28} color="gray" />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#007bff",
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};
const style = StyleSheet.create({});
