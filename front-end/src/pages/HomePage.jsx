import { useAuth } from "../components/context/AuthContext";

function HomePage() {
	const data = useAuth();
	console.log(data);

	return (
		<div>
			<h1>Home Page</h1>
			<p>This is the home page</p>
		</div>
	);
}
export default HomePage;
