import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";
import { firebaseAuth, firebaseStorage } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useHeaderHeight } from "@react-navigation/elements";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Register = () => {
  const height = useHeaderHeight();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const uploadImage = async (uri, userId) => {
    const res = await fetch(uri);
    const blob = await res.blob();
    const storegeRef = ref(firebaseStorage, `ProfileImage/${userId}`);
    const uploadTask = uploadBytesResumable(storegeRef, blob);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
        console.log("Upload is" + progress + "% done");
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          setImage(null);
          await fetch("http://10.0.2.2:5000/api/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firebaseUserId: userId,
              image: downloadUrl,
            }),
            redirect: "follow",
          });
        });
      }
    );
  };

  const register = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      await uploadImage(image, res.user.uid);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <ScrollView>
        <View
          style={{
            padding: 10,
            alignItems: "center",
          }}
        >
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
          <View style={{ marginTop: 50, alignItems: "center" }}>
            <Pressable onPress={pickImage}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("../assets/blank-profile-picture-973460_1280.png")
                }
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
            </Pressable>
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
                onChangeText={(text) => setEmail(text)}
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
              onPress={register}
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
              onPress={() => navigation.navigate("Login")}
              style={{ marginTop: 15 }}
            >
              <Text
                style={{ textAlign: "center", color: "gray", fontSize: 16 }}
              >
                Already Have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({});
