import { Button, Input, Card } from "../components/ui";
import { useForm } from "react-hook-form";

function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<div className="h-[calc(100vh-64px)] flex items-center justify-center">
			<Card>
				<h1 className="text-2xl font-bold text-yellow-200">Register</h1>

				<form onSubmit={onSubmit} className="flex flex-col gap-y-2">
					<Input
						placeholder="Enter your username"
						{...register("username", { required: true })}
					/>

					{errors.username && (
						<span className="text-red-500">This field is required</span>
					)}

					<Input
						type="email"
						placeholder="Enter your email"
						{...register("email", { required: true })}
					/>

					{errors.email && (
						<span className="text-red-500">This field is required</span>
					)}

					<Input
						type="password"
						placeholder="Enter your password"
						{...register("password", { required: true })}
					/>

					{errors.password && (
						<span className="text-red-500">This field is required</span>
					)}

					<Button>Register</Button>
				</form>
			</Card>
		</div>
	);
}
export default RegisterPage;
