import { Link } from 'react-router';

function FishCard({ fish }) {
    return (
        <article className="p-6 bg-gradient-to-b from-blue-300 to-blue-600 text-white rounded-lg shadow-lg border border-blue-400 hover:shadow-2xl transition-shadow flex flex-col gap-4 h-full">
            <div className="flex flex-col justify-between flex-grow">
                <div>
                    <h1 className="text-2xl font-bold mb-2">{fish.name}</h1>
                    <h3 className="text-lg italic mb-4">{fish.scientificName}</h3>
                </div>
                <div className="flex justify-center mb-4">
                    {fish.imageUrl === "" ? (
                        <img src="https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Fish/fish-placeholder.jpg" alt={fish.name} className="w-full h-48 object-cover rounded-md" />
                    ) : (
                        <img src={fish.imageUrl} alt={fish.name} className="w-full h-48 object-cover rounded-md" />
                    )}
                </div>

            </div>
            <Link
                to={`/fish/${fish.id}`}
                className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md text-center hover:bg-teal-600 transition-all"
            >
                Details
            </Link>
        </article>
    );
}

export default FishCard;