import React from 'react';
import { Link } from "react-router"

function ErrorBoundary() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-9xl font-bold text-red-600">404</h1>
            <h3 className="text-2xl text-gray-700 mt-4">Pagina niet gevonden.</h3>
            <Link
                to="/"
                className="mt-6 px-6 py-3 text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-colors"
            >
                Terug naar alle vissen
            </Link>
        </div>
    )
}

export default ErrorBoundary;
