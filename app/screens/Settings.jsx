import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { firebaseAuth } from "../config/firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../utils/hooks/useAuth";
import { useHeaderHeight } from "@react-navigation/elements";
export const Settings = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const height = useHeaderHeight();
  const [userData, setUserData] = useState(null);
  const fetchUser = async () => {
    if (user) {
      try {
        const res = await fetch(`http://10.0.2.2:5000/api/users/${user.uid}`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + user.accessToken,
          },
          redirect: "follow",
        });
        const data = await res.json();
        setUserData(data);
        setName(data.name);
        setEmail(user.email);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchUser();
  }, [user]);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            source={
              userData?.image
                ? { uri: userData?.image }
                : require("../assets/blank-profile-picture-973460_1280.png")
            }
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              autoCapitalize="none"
              style={{
                fontSize: 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              style={{
                fontSize: 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              autoCapitalize="none"
              style={{
                fontSize: 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 50,
              flexDirection: "row",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Pressable
              onPress={() => firebaseAuth.signOut()}
              style={{
                width: 100,
                backgroundColor: "#cc0033",
                padding: 15,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Sign out
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 100,
                backgroundColor: "#4A55A2",
                padding: 15,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Save
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({});
