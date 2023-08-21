import {Input} from "../components/ui/Input";
function RegisterPage() {
	return (
		<div>
            <h1 className="text-2xl font-bold text-yellow-200">Register</h1>
			<form>
				<Input placeholder="Enter your username" />
				<Input type="email" placeholder="Enter your email" />
				<Input type="password" placeholder="Enter your password" />
			<button>
				Register
			</button>
			</form>
		</div>
	);
}
export default RegisterPage;