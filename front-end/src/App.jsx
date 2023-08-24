import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import TaskPage from "./pages/TaskPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import { Container } from "./components/ui";

function App() {
	return (
		<>
		<Navbar />
			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/task" element={<TaskPage />} />
					<Route path="/task/new" element={<TaskFormPage />} />
					<Route path="/tasks/1/edit" element={<TaskFormPage />} />
					<Route path="/profile" element={<ProfilePage />} />

					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
