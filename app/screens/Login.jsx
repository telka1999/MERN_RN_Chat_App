import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import { useState } from "react";
import { firebaseAuth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../utils/hooks/useAuth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const fetchData = async () => {
    try {
      const res = await fetch("http://10.0.2.2:5000/api/users/register", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + user.accessToken,
        },
        redirect: "follow",
      });
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(res.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
    <View style={style.conteiner}>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={style.input}
        placeholder="Email"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={style.input}
        placeholder="Password"
        autoCapitalize="none"
      ></TextInput>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Login" onPress={login} />
          <Button title="Register" onPress={register} />
          <Button title="Protected Data" onPress={fetchData} />
        </>
      )}
      <Text>{data ? data.message : ""}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  conteiner: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
