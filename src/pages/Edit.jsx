import { Navigate, useNavigate } from 'react-router';
import AddChessSpotsForm from '../components/AddChessSpotsForm';
import { useEffect, useState } from 'react'

function Edit({ id }) {
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();

    function formUpdater() {
        navigate('/');
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <AddChessSpotsForm clickhandler={formUpdater} id={id} />
        </div>
    )
}

export default Edit