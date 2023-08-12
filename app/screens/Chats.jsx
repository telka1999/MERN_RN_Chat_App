import { Pressable, ScrollView } from "react-native";
import { UserChat } from "../components/UserChat";
const items = [
  {
    name: "Friend One",
  },
  {
    name: "Friend Two",
  },
  {
    name: "Friend Three",
  },
];
export const Chats = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable>
        {items.map((item, i) => {
          return <UserChat key={i} item={item} />;
        })}
      </Pressable>
    </ScrollView>
  );
};
