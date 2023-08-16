import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { firebaseAuth } from "../config/firebase";
export const Settings = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
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
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({});
