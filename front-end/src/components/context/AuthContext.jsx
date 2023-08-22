import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [isAuth, setIsAuth] = useState(false);
	const [error, setError] = useState(null);

	return (
		<AuthContext.Provider value={{ user, isAuth, error }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
