import { createContext, useState, useContext, useEffect } from "react";
import cookie from "js-cookie";
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
		try {
			const res = await axios.post(
				"http://localhost:3000/api/v1/auth/signin",
				data,
				{
					withCredentials: true,
				}
			);
			console.log(res);
			setUser(res.data);
			setIsAuth(true);

			return res.data;
		} catch (error) {
			console.log(error);

			if (Array.isArray(error.response.data)) {
				return setError(error.response.data);
			}

			setError(error.response.data.message);
		}
	};

	const signup = async (data) => {
		try {
			const res = await axios.post(
				"/auth/signup",
				data,
			);
			setUser(res.data);
			setIsAuth(true);

			return res.data;
		} catch (error) {
			console.log(error);

			if (Array.isArray(error.response.data)) {
				return setError(error.response.data);
			}

			setError(error.response.data.message);
		}
	};

	const signout = async () => {
		try {
			const res = await axios.post(
				"http://localhost:3000/api/v1/auth/signout",
				{
					withCredentials: true,
				}
			);
			console.log(res);
			setUser(null);
			setIsAuth(false);
			cookie.remove("token");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (cookie.get("token")) {
			// get profile
			axios
				.get("http://localhost:3000/api/v1/auth/profile", {
					withCredentials: true,
				})
				.then((res) => {
					console.log(res);
					setUser(res.data);
					setIsAuth(true);
				})
				.catch((error) => {
					console.log(error);
					setUser(null);
					
					setError(error.response.data.message);
				});
		}
	}, []);

	return (
		<AuthContext.Provider value={{ user, isAuth, error, signup, signin, signout }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;