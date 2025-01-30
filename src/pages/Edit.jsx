import { Navigate, useNavigate, useLoaderData } from 'react-router';
import EditFishForm from '../components/EditFishForm';
import { useEffect, useState } from 'react'

function Edit({ id }) {
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();
    const fish = useLoaderData();

    function handleSubmit(id) {
        navigate(`/fish/${id}`);
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <EditFishForm onSubmit={handleSubmit} fish={fish} />
        </div>
    )
}

export default Edit