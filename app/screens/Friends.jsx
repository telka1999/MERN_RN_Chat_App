import { View } from "react-native";
import { FriendsRequest } from "../components/FriendRequest";
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
export const Friends = () => {
  return (
    <View style={{ padding: 10, marginHorizontal: 12 }}>
      {items.map((item, i) => {
        return <FriendsRequest key={i} item={item} />;
      })}
    </View>
  );
};
