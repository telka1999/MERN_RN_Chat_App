import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { User } from "../components/User";
import { firebaseAuth, firebaseStorage } from "../config/firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../utils/hooks/useAuth";
export const Search = () => {
  const { user } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const fetchUser = async () => {
    try {
      const res = await fetch(
        `http://10.0.2.2:5000/api/users/all/${user.uid}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + user.accessToken,
          },
          redirect: "follow",
        }
      );
      const data = await res.json();
      setAllUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderBottomColor: "#dddddd",
          borderTopColor: "#dddddd",
          backgroundColor: "white",
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
          placeholder="Search people"
        />
      </View>
      <ScrollView style={{ padding: 10 }}>
        {allUsers.map((user, i) => {
          return <User key={i} user={user} btnName="Add" />;
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({});
