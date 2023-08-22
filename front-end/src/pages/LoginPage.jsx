import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit(async (data) => {
		const res = await axios.post(
			"http://localhost:3000/api/v1/auth/signin",
			data,
			{
				withCredentials: true,
			}
		);
	});

	return (
		<div className="h-[calc(100vh-4rem)] flex justify-center items-center">
			<Card>
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
