import { Link } from "react-router"

function EditFishButton({ id }) {
    return (
        <Link to={`/fish/edit/${id}`}
            className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md text-center hover:bg-teal-600 transition-all"
        >Vis bewerken</Link>
    )
}

export default EditFishButton