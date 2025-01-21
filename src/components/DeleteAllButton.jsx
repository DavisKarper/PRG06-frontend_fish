function DeleteAllButton({ chessSpots }) {
    async function deleteSpot(id) {
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
            } else {
                const errorData = await response.json();
                console.error('Error deleting spot:', errorData);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }

    async function deleteAll() {
        chessSpots.map((chessSpot) => (
            deleteSpot(chessSpot.id)
        ))
    }


    return (
        <button onClick={deleteAll}>Delete all spots</button>
    )
};

export default DeleteAllButton;