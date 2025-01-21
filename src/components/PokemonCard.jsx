function PokemonCard({ pokemon }) {
    return (
        <article
            className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-32 h-32 mx-auto object-contain"
            />
            <h2 className="text-center text-lg font-bold mt-4 text-gray-800">
                {pokemon.name}
            </h2>
            <h3>{pokemon.types[0]}, {pokemon.types[1]}</h3>
        </article>

    )
}

export default PokemonCard
