import React, { useState } from 'react';

function AddFishForm({ onSubmit, fish }) {
    const [formData, setFormData] = useState({
        name: fish.name,
        scientificName: fish.scientificName,
        description: fish.scientificName,
        funFacts: fish.funFacts,
        imageUrl: fish.imageUrl,
        location: fish.loc.point
    });

    const [newFunFact, setNewFunFact] = useState("");

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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/fishes/${fish.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Data successfully sent:', responseData);
                onSubmit(fish.id)
            } else {
                const errorData = await response.json();
                console.error('Error sending data:', errorData);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    const addFunFact = () => {
        if (newFunFact.trim() !== "") {
            setFormData({ ...formData, funFacts: [...formData.funFacts, newFunFact] });
            setNewFunFact("");
        }
    };

    const removeFunFact = (index) => {
        setFormData({
            ...formData,
            funFacts: formData.funFacts.filter((_, i) => i !== index)
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Naam: *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="scientificName" className="block text-lg font-medium text-gray-700">Wetenschappelijke naam: *</label>
                <input
                    type="text"
                    id="scientificName"
                    name="scientificName"
                    value={formData.scientificName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-lg font-medium text-gray-700">Beschrijving: *</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div className="mt-4">
                <label className="block text-lg font-medium text-gray-700">Fun Facts:</label>
                <div className="flex gap-2 mt-1">
                    <input
                        type="text"
                        value={newFunFact}
                        onChange={(e) => setNewFunFact(e.target.value)}
                        className="border rounded p-2 flex-grow"
                        placeholder="Voeg een fun fact toe"
                    />
                    <button type="button"
                        onClick={() => addFunFact()} className="bg-blue-500 text-white px-4 py-2 rounded">
                        +
                    </button>
                </div>
                <ul className="mt-2">
                    {formData.funFacts.map((fact, index) => (
                        <li key={index} className="flex justify-between bg-gray-100 p-2 rounded mt-1">
                            {fact}
                            <button type="button"
                                onClick={() => removeFunFact(index)} className="text-red-500">X</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-700">Link naar afbeelding:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="location" className="block text-lg font-medium text-gray-700">Locatie:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
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
            <div>* velden zijn verplicht</div>
        </form>
    );
}

export default AddFishForm;
