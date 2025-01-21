import { Link, Outlet } from 'react-router';

function Layout() {
    return (
        <div>
            <header className="bg-white shadow-md">
                <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-8 py-4">
                        <Link
                            to="/"
                            className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/create"
                            className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            Create New Product
                        </Link>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>

    );
}

export default Layout;