import { Link } from "react-router"

function EditButton({ id }) {
    return (
        <Link to={`/chessSpot/edit/${id}`}>Edit</Link>
    )
}

export default EditButton