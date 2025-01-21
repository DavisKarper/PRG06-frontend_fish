import { Link } from 'react-router';

function ChessSpotCard({ chessSpot }) {
    const fallbackImage = 'https://png.pngtree.com/thumb_back/fh260/background/20221005/pngtree-simple-chess-board-with-pawn-pawn-strategy-game-chess-game-photo-image_34085610.jpg'; // Vervang dit door de URL van je standaardafbeelding

    const handleImageError = (e) => {
        e.target.src = fallbackImage; // Stelt de afbeelding in op de fallback als de afbeelding niet wordt geladen
    };

    return (
        <article className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{chessSpot.title}</h1>

            {chessSpot.imageUrl ? (
                <img
                    src={chessSpot.imageUrl}
                    alt={chessSpot.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    onError={handleImageError} // Als de afbeelding niet beschikbaar is, gebruik dan de fallback
                />
            ) : (
                <img
                    src={fallbackImage}
                    alt="Fallback image"
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}
            <Link to={`/chessSpot/${chessSpot.id}`}>Details</Link>
        </article >
    );
}

export default ChessSpotCard;
