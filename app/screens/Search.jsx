import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
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
];
export const Search = () => {
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
        {items.map((item, i) => {
          return <User key={i} item={item} btnName="Add" />;
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({});
