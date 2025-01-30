import { Link, Outlet } from 'react-router';

function Layout() {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-500 to-teal-400">
                <header className="bg-opacity-80 bg-blue-800 shadow-lg">
                    <nav className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center space-x-8 py-4">
                            <Link
                                to="/"
                                className="text-lg font-semibold text-white hover:text-teal-200 transition-colors"
                            >
                                Alle vissen
                            </Link>
                            <Link
                                to="/create"
                                className="text-lg font-semibold text-white hover:text-teal-200 transition-colors"
                            >
                                Nieuwe vis
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className="bg-white bg-opacity-90 p-6 shadow-lg">
                    <Outlet />
                </main>
                <footer className="bg-blue-900 text-white py-4 text-center">
                    <span className="flex items-center justify-center space-x-2">
                        <span>Copyrighted by David de Knegt</span>
                    </span>
                </footer>
            </div>
        </>
    );
}

export default Layout;
