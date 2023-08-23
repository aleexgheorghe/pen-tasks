import { useAuth } from "../components/context/AuthContext";

function ProfilePage() {
	const { user } = useAuth();

	return (
		<div>
			<h1>Profile Page</h1>
			<p>This is the profile page</p>
			{JSON.stringify(user)}
		</div>
	);
}
export default ProfilePage;
