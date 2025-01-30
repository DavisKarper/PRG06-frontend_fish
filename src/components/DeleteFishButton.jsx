import { useState } from 'react';
import { useNavigate } from 'react-router';

function DeleteFishButton({ id }) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();

    const handleConfirmation = () => {
        setIsConfirmed(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isConfirmed) {
            alert('Bevestig alstublieft het verwijderen van de vis');
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/fishes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                let responseData = {};
                if (response.status !== 204) {  // Status 204 betekent geen content
                    responseData = await response.json();
                }

                console.log('Spot successfully deleted:', responseData);
                navigate('/');  // Navigeer naar de homepagina
            } else {
                const errorData = await response.json();
                console.error('Error deleting spot:', errorData);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                {!isConfirmed ? (
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleConfirmation}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >Vis verwijderen</button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-sm text-gray-700 mb-4">Weet je zeker dat je deze vis wilt verwijderen?</p>
                        <button
                            type="submit"
                            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Verwijder
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default DeleteFishButton;
