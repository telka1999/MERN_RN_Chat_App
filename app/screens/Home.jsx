import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useAuth } from "../utils/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { User } from "../components/User";
const items = [
  {
    name: "Friend One",
    email: "friendone@gmail.com",
  },
  {
    name: "Friend Two",
    email: "friendtwo@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
  {
    name: "Friend Three",
    email: "friendthree@gmail.com",
  },
];
export const Home = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch("http://10.0.2.2:5000/api/users/login", {
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
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Swift Chat</Text>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
          <Ionicons
            onPress={() => navigation.navigate("Chats")}
            name="chatbox-ellipses-outline"
            size={24}
            color="black"
          />
          <MaterialIcons
            onPress={() => navigation.navigate("Friends")}
            name="people-outline"
            size={24}
            color="black"
          />
          <Ionicons
            onPress={() => navigation.navigate("Search")}
            name="search-outline"
            size={24}
            color="black"
          />
          <Ionicons
            onPress={() => navigation.navigate("Settings")}
            name="ios-settings-outline"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, []);
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        {items.map((item, i) => {
          return <User key={i} item={item} btnName="Friend" />;
        })}
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({});
