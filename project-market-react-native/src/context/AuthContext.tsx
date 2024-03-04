import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { getToken, removeToken, setToken } from "../storageData";

export interface User {
    id?: number;
    email: string;
    password: string;
    repeat?: string;
}

type AuthContextType = {
    currentUserId: number;
    users: User[];
    userToken: string | null;
    fetchUsers: () => Promise<void>;
    fetchSignUpUser: (user: User) => Promise<void>;
    fetchLoginUser: (user: User) => Promise<void>;
    signOut: () => Promise<void>
};

interface AuthProviderProps {
    children: ReactNode;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

const baseUrl = 'https://localhost:7219/User';

const getAllUsers = async () => {
    try {
        const url = `${baseUrl}/All`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error occurred while fetching data: ", error);
        throw error;
    }
};

const signUpUser = async (user: User) => {
    try {
        const url = `${baseUrl}/Signup`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const responseData = await response.json();
            return { ok: true, message: responseData.message, userId: responseData.userId };
        } else {
            const errorData = await response.json();
            return { ok: false, error: errorData };
        }
    } catch (error) {
        console.error("Error occurred while fetching data: ", error);
        throw error;
    }
};

const loginUser = async (user: User) => {
    try {
        const url = `${baseUrl}/Login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const responseData = await response.json();                        
            return { ok: true, message: responseData.message, userId: responseData.userId };
        } else {
            const errorData = await response.json();
            return { ok: false, error: errorData };
        }
    } catch (error) {
        console.error("Error occurred while fetching data: ", error);
        throw error;
    }
};

export const AuthContext = createContext<AuthContextType>({
    currentUserId: -1,
    users: [],
    userToken: null,
    fetchUsers: async () => { },
    fetchSignUpUser: async (user: User) => { },
    fetchLoginUser: async (user: User) => { },
    signOut: async () => { }
});

export default function AuthProvider({ children }: AuthProviderProps) {
    const [users, setUsers] = useState<User[]>([]);
    const [userToken, setUserToken] = useState<string | null>(null);
    const [currentUserId, setCurrentUserId] = useState<number>(-1);

    useEffect(() => {
        fetchUsers();
        console.log(currentUserId);

    }, [currentUserId]);

    const fetchUsers = async () => {
        try {
            const fetchedUsers = await getAllUsers();
            setUsers(fetchedUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const fetchSignUpUser = async (user: User) => {
        try {
            const response = await signUpUser(user);

            if (response.ok) {

                await setToken();
                const token = await getToken();

                if (token) {
                    setUserToken(token);
                    console.log(response.userId);
                    setCurrentUserId(response.userId);
                } else {
                    console.error('Error setting token');
                }
            }
            else {
                console.error('Error signing up:', response.error.message);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchLoginUser = async (user: User) => {
        try {
            const response = await loginUser(user);

            console.log(response);
            
            if (response.ok) {
                await setToken();
                const token = await getToken();

                if (token) {
                    setUserToken(token);
                    setCurrentUserId(response.userId);
                } else {
                    console.error('Error setting token');
                }
            } else {
                console.error('Error logging in:', response.error.message);
            }


        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const signOut = async () => {
        removeToken()
        let token = await getToken()
        setUserToken(token || null);
        setCurrentUserId(-1)
    };




    const contextValue: AuthContextType = { fetchLoginUser, signOut, fetchSignUpUser, fetchUsers, currentUserId, users, userToken };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
