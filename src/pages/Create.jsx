import { Navigate, useNavigate } from 'react-router';
import AddFishForm from '../components/AddFishForm';
import { useEffect, useState } from 'react'

function Create() {
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(id) {
        navigate(`/fish/${id}`);
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <AddFishForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Create