import { useLoaderData } from 'react-router';
import MapWithLocation from '../components/MapWithLocation';
import DeleteFishButton from '../components/DeleteFishButton';
import EditFishButton from '../components/EditFishButton';

function Details() {
    const fish = useLoaderData();

    return (
        <>
            <article className="p-6 bg-gradient-to-b from-blue-300 to-blue-600 text-white rounded-lg shadow-lg border border-blue-400 hover:shadow-2xl transition-shadow flex flex-col gap-4 max-w-2xl mx-auto h-full">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-semibold">{fish.name}</h1>
                        <h3 className="text-xl italic">{fish.scientificName}</h3>
                        <p className="text-white">{fish.description}</p>
                    </div>
                    {fish.imageUrl === "" ? (
                        <img src="https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Fish/fish-placeholder.jpg" alt={fish.name} className="rounded-lg shadow-lg border border-blue-400 w-82 h-64 object-cover" />
                    ) : (
                        <img src={fish.imageUrl} alt={fish.name} className="rounded-lg shadow-lg border border-blue-400 w-82 h-64 object-cover" />
                    )}
                </div>

                <ul className="list-disc pl-5 space-y-2">
                    {fish.funFacts.map((fact, index) => (
                        <li key={index} className="text-sm">{fact}</li>
                    ))}
                </ul>

                <div className="bg-teal-500 rounded-lg p-4 pt-0">
                    <h3 className="text-xl font-semibold p-1">Locatie: {fish.loc.point}</h3>

                    <div className="rounded-lg overflow-hidden border-b border-gray-200">
                        <MapWithLocation loc={fish.loc} />
                    </div>
                </div>

                <div className="buttons flex justify-center gap-4 mt-4">
                    <DeleteFishButton id={fish.id} />
                    <EditFishButton id={fish.id} />
                </div>

            </article>
        </>

    );
}

export default Details;
