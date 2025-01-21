import React, { useState } from 'react';

function AddChessSpotsForm({ clickhandler }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        review: '',
        imageUrl: '',
    });

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Formulier verzonden:', formData);

        try {
            // Sending the POST request
            const response = await fetch('https://prg06-node-express.antwan.eu/spots/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify that we're sending JSON
                    'Accept': 'application/json', // Specify that we expect a JSON response
                },
                body: JSON.stringify(formData), // Send the form data as JSON
            });

            clickhandler();

            // Check if the request was successful
            if (response.ok) {
                const responseData = await response.json(); // Parse the response if successful
                console.log('Data successfully sent:', responseData);
            } else {
                // Log the error response if the request fails
                const errorData = await response.json();
                console.error('Error sending data:', errorData);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">Titel:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-lg font-medium text-gray-700">Beschrijving:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="review" className="block text-lg font-medium text-gray-700">Review:</label>
                <input
                    type="text"
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-700">Afbeelding:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Verzenden
            </button>
        </form>
    );
}

export default AddChessSpotsForm;
