import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Friends } from "../screens/Friends";
import { Chats } from "../screens/Chats";
import { ChatMessages } from "../screens/ChatMessages";
import { Search } from "../screens/Search";
import { Settings } from "../screens/Settings";
const Stack = createNativeStackNavigator();
export const UserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Messages" component={ChatMessages} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
