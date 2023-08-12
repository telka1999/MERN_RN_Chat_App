import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
