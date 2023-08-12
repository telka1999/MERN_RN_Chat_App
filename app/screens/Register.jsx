import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import { firebaseAuth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const register = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
          <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: "500" }}>
            Register
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            Register to Your Account
          </Text>
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
              value={password}
              onChangeText={(text) => setPassword(text)}
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
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 15,
              marginTop: 50,
              marginRight: "auto",
              marginLeft: "auto",
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
              Register
            </Text>
          </Pressable>
          <Pressable
          onPress={()=>navigation.navigate("Login")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already Have an account? Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({});
