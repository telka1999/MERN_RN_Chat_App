import {
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
} from "react-native";
import { useState } from "react";
import { firebaseAuth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = firebaseAuth;
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
  const login = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const register = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
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
        placeholder="Email"
        autoCapitalize="none"
      ></TextInput>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Login" onPress={login} />
          <Button title="Register" onPress={register} />
        </>
      )}
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
