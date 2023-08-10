import { View, Text, Button } from "react-native";
import { useState } from "react";
export const Home = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch("http://10.0.2.2:5000/api/users/register", {
        method: "POST",
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
      <Button onPress={fetchData} title="Protected DataI" />
      <Text>{data ? data.message : ""}</Text>
    </View>
  );
};
