import { useState } from 'react';
import { useNavigate } from 'react-router';

function DeleteChessSpotButton({ id }) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();

    const handleConfirmation = () => {
        setIsConfirmed(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Als niet bevestigd, toon een waarschuwing
        if (!isConfirmed) {
            alert('Please confirm deletion');
            return;
        }

        try {
            const response = await fetch(`https://prg06-node-express.antwan.eu/spots/${id}`, {
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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Delete Chess Spot</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {!isConfirmed ? (
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleConfirmation}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Confirm Deletion
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-sm text-gray-700 mb-4">Are you sure you want to delete this chess spot?</p>
                        <button
                            type="submit"
                            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default DeleteChessSpotButton;
