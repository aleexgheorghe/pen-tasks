import { createContext, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [isAuth, setIsAuth] = useState(false);
	const [error, setError] = useState(null);

	const signin = async (data) => {
		const res = await axios.post(
			"http://localhost:3000/api/v1/auth/signin",
			data,
			{
				withCredentials: true,
			}
		);
		console.log(res);
		setUser(res.data);
	};

	const signup = async (data) => {
		const res = await axios.post(
			"http://localhost:3000/api/v1/auth/signup",
			data,
			{
				withCredentials: true,
			}
		);
		console.log(res);
		setUser(res.data);
	};

	return (
		<AuthContext.Provider value={{ user, isAuth, error, signup, signin }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
