import { useState, useEffect } from 'react';
import FishCard from '../components/FishCard';

function Main() {
    const [fishes, setFishes] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchFishes = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            const data = await response.json();
            setFishes(data.items);
            setPagination(data.pagination);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFishes(`${import.meta.env.VITE_API_URL}/fishes?page=1&limit=10`);
    }, []);

    const handleDifferentPage = (method) => {
        const link = pagination._links[method];
        if (link) {
            fetchFishes(link.href);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
                {fishes.map((fish) => (
                    <div key={fish.id} className="flex flex-col gap-4">
                        <FishCard fish={fish} />
                    </div>
                ))}
            </ul>
            <div className="pagination flex justify-center items-center space-x-4">
                <div className='firstPage'>
                    {pagination._links.previous && (
                        <button onClick={() => handleDifferentPage('first')} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Eerste pagina
                        </button>
                    )}
                </div>
                <div className='previousPage'>
                    {pagination._links.previous && (
                        <button onClick={() => handleDifferentPage('previous')} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Vorige pagina
                        </button>
                    )}
                </div>
                <div className='text-center'>
                    <span>Pagina {pagination.currentPage} van de {pagination.totalPages}</span>
                </div>
                <div className='nextPage'>
                    {pagination._links.next && (
                        <button onClick={() => handleDifferentPage('next')} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Volgende Pagina
                        </button>
                    )}
                </div>
                <div className='lastPage'>
                    {pagination._links.next && (
                        <button onClick={() => handleDifferentPage('last')} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Laatste Pagina
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Main;
