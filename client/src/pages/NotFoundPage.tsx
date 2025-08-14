import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            404 not found
            <br></br>
            <Link to="/">Go back home</Link>
        </div>
    )
}