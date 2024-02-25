import { createContext, useState } from "react";
import { getToken, removeToken, setToken } from "../storageData";
import { Alert } from "react-native";

interface User {
    name: string;
    email: string;
    password: string;
}

type AuthContextType = {
    users: User[];
    userToken: string | null;
    signIn: (user: { email: string; password: string }) => Promise<void>;
    signUp: (user: { name: string; email: string; password: string }) => Promise<void>;
    signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
    users: [],
    userToken: null,
    signIn: async () => { },
    signUp: async () => { },
    signOut: async () => { },
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [users, setUsers] = useState<User[]>([]);
    const [userToken, setUserToken] = useState<string | null>(null);

    const signUp = async (user: User) => {
        const existingUserByEmail = users.find((u) => u.email === user.email);

        if (existingUserByEmail) {
          Alert.alert('Error', 'User already exists')
          return
        }

        setUsers((prev) => [...prev, user]);
        await setToken()
        let token = await getToken()
        if (token) {
            
            setUserToken(token);
        }
        
    };

    const signIn = async (user: { email: string; password: string }) => {
        
        const existingUser = users.find(
            (u) => u.email === user.email && u.password === user.password
        );
        

        if (existingUser) {
            await setToken()
            let token = await getToken()
            if (token) {
                setUserToken(token);
            }
        }

    };

    const signOut = async () => {
        removeToken()
        let token = await getToken()
        setUserToken(token || null);
    };

    const contextValue = { users, userToken, signIn, signUp, signOut };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
