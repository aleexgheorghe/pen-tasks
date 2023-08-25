import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
	const location = useLocation();
	const { isAuth, signout } = useAuth();

	return (
		<nav className="bg-gray-800 text-white">
			<Container className="flex justify-between items-center py-4 ">
				<h1 className="text-2xl font-bold">
					<Link to="/">Task Manager</Link>
				</h1>

				<ul className="flex gap-4">
					{isAuth ? (
						<>
							{privateRoutes.map(({ name, href }) => (
								<li
									key={name}
									className={
										location.pathname === href
											? "bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-700"
											: "px-4 py-2 rounded-md hover:bg-gray-700"
									}
								>
									<Link to={href}>{name}</Link>
								</li>
							))}
							<li
								onClick={signout}
								className="px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer"
							>
								Signout
							</li>
						</>
					) : (
						publicRoutes.map(({ name, href }) => (
							<li
								key={name}
								className={
									location.pathname === href
										? "bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-700"
										: "px-4 py-2 rounded-md hover:bg-gray-700"
								}
							>
								<Link to={href}>{name}</Link>
							</li>
						))
					)}
				</ul>
			</Container>
		</nav>
	);
}
