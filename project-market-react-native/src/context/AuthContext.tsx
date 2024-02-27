import { ReactNode, createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import { getToken, removeToken, setToken } from "../storageData";

export interface User {
    email: string;
    password: string;
    repeat?: string;
}

type AuthContextType = {
    users: User[],
    userToken: string | null;
    signIn: (user: User) => Promise<void>;
    signUp: (user: User) => Promise<void>;
    signOut: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthContext = createContext<AuthContextType>(
    {
        users: [],
        userToken: null,
        signIn: async () => { },
        signUp: async () => { },
        signOut: async () => { },
    }
)

export default function AuthProvider({ children }: AuthProviderProps) {
    const [users, setUsers] = useState<User[]>([])
    const [userToken, setUserToken] = useState<string | null>(null)
    
    const signUp = async (user: User) => {
        const existingUser = users.find((u) => u.email === user.email)

        if (existingUser) {
            Alert.alert('Error', 'User already exists')
            return
        }

        setUsers((prev) => [...prev, user])
        await setToken()
        let token = await getToken()
        if (token) {
            setUserToken(token)
        }
    }

    const signIn = async (user: User) => {
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
    }

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