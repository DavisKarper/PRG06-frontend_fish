import { useLoaderData } from 'react-router';
import ChessSpotCard from '../components/ChessSpotCard';
import DeleteAllButton from '../components/DeleteAllButton';

function Main() {
    const { chessSpots } = useLoaderData();

    return (
        <div>
            <DeleteAllButton chessSpots={chessSpots} />
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
                {chessSpots.map((chessSpot) => (
                    <div key={chessSpot.id} className="flex flex-col gap-4">
                        <ChessSpotCard chessSpot={chessSpot} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Main