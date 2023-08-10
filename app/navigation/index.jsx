import { useAuth } from "../utils/hooks/useAuth";
import { UserStack } from "./serStack";
import { AuthStack } from "./authStack";
export const RootNavigation = () => {
  const { user } = useAuth();
  return user ? <UserStack /> : <AuthStack />;
};
