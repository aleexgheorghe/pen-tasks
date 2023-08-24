import { Card, Input, Button, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
	const { register, handleSubmit } = useForm();

	const { signin, error } = useAuth();
	const navigate = useNavigate();

	const onSubmit = handleSubmit(async (data) => {
		const user = await signin(data);

		if (user) {
			navigate("/profile");
		}
	});

	return (
		<div className="h-[calc(100vh-10rem)] flex items-center justify-center">
			<Card>
				{error && <div className="text-red-500 text-center mb-4">{error}</div>}

				<h1 className="text-2xl font-bold text-center mb-4">Login</h1>

				<form onSubmit={onSubmit}>
					<Label htmlFor="email">Email</Label>
					<Input
						label="Email"
						type="email"
						{...register("email", { required: true })}
					/>

					<Label htmlFor="password">Password</Label>
					<Input
						label="Password"
						type="password"
						{...register("password", { required: true })}
					/>

					<div className="flex flex-col gap-2 mt-4">
						<Button type="submit">Login</Button>
						<p className="text-sm text-gray-400">
							Don't have an account?{" "}
							<Link to="/register" className="text-blue-400">
								Register
							</Link>
						</p>
					</div>
				</form>
			</Card>
		</div>
	);
}

export default LoginPage;
