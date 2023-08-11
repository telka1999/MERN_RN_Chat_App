import { View, Text, Button } from "react-native";
import { useState } from "react";
import { firebaseAuth } from "../config/firebase";
import { useAuth } from "../utils/hooks/useAuth";
export const Home = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch("http://10.0.2.2:5000/api/users/register", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + user.accessToken,
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
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={fetchData} title="Protected Data" />
      <Text>{data ? data.message : ""}</Text>
      <Button onPress={() => firebaseAuth.signOut()} title="Log out" />
    </View>
  );
};
