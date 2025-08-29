import { Link } from "react-router-dom";
import TableComponent from "../components/Table";
import './StoredTiresPage.css'

export default function StoredTiresPage() {
    return (
        <div className="main-content">
            <TableComponent/>
            <div className="add-button">
                <Link to='/createtire'>
                    create a tire
                </Link>
            </div>
        </div> 
    ) 
}