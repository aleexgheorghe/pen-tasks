import { Link } from "react-router-dom";
import { Card  } from "../components/ui";

function NotFound() {
  return (
    <div className="text-center h-[calc(100vh-4rem)] flex justify-center items-center flex-col animate-pulse">

        <Card className="w-96 h-96 flex flex-col justify-center items-center backdrop-blur-lg">
            <h1 className="text-8xl font-bold ">404</h1>
            <p className="text-4xl">Page not found</p>

            <Link className="text-xl mt-4" to="/">Go back to home page</Link>
        </Card>
    </div>
  );
}

export default NotFound