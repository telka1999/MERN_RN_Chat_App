import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Friends } from "../screens/Friends";
import { Chats } from "../screens/Chats";
import { ChatMessages } from "../screens/ChatMessages";
const Stack = createNativeStackNavigator();
export const UserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Messages" component={ChatMessages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
