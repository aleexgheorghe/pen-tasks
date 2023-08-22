import { Button, Input, Card, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit(async (data) => {
		const res = await axios.post(
			"http://localhost:3000/api/v1/auth/signup",
			data,
			{
				withCredentials: true,
			}
		);
		console.log(res);
	});

	return (
		<div className="h-[calc(100vh-64px)] flex items-center justify-center">
			<Card>
				<h1 className="text-2xl font-bold text-center mb-4">Register</h1>

				<form onSubmit={onSubmit} className="flex flex-col">

					<Label htmlFor="name">Name</Label>
					<Input
						placeholder="Enter your name"
						{...register("name", { required: true })}
					/>

					{errors.name && (
						<span className="text-red-500">This field is required</span>
					)}

					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						placeholder="Enter your email"
						{...register("email", { required: true })}
					/>

					{errors.email && (
						<span className="text-red-500">This field is required</span>
					)}

					<Label htmlFor="password">Password</Label>
					<Input
						type="password"
						placeholder="Enter your password"
						{...register("password", { required: true })}
					/>

					{errors.password && (
						<span className="text-red-500">This field is required</span>
					)}

					

					<div className="flex flex-col gap-2 mt-4">
					<Button>Register</Button>
					<p className="text-sm text-gray-400">Already have an account? <Link to="/login" className="text-blue-400">Login</Link></p>
					</div>

				</form>
			</Card>
		</div>
	);
}
export default RegisterPage;
