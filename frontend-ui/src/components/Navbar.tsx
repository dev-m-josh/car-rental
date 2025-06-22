import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Car, Menu } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-purple-600 underline" : "text-gray-700 hover:text-purple-600";

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="min-w-full mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2">
                    <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center">
                        <Car className="text-white font-bold text-lg" />
                    </div>
                    <span className="text-xl font-bold text-purple-600">DriveConnect</span>
                </NavLink>

                {/* Hamburger Icon - visible <lg */}
                <button className="lg:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={28} />
                </button>

                {/* Desktop Nav - visible ≥lg */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavLink to="/" className={getLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={getLinkClass}>
                        About
                    </NavLink>
                    <NavLink to="/bookings" className={getLinkClass}>
                        Bookings
                    </NavLink>
                    <NavLink to="/dashboard" className={getLinkClass}>
                        Dashboard
                    </NavLink>
                </div>

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-80 px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-300"
                />

                <div className="hidden lg:flex items-center gap-4">
                    <NavLink
                        to="/profile"
                        className="px-4 py-2 border rounded-md text-gray-700 hover:border-purple-600 transition-colors"
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Register
                    </NavLink>
                </div>
            </div>

            {/* Mobile Nav - visible <lg */}
            {isMenuOpen && (
                <div className="lg:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
                    <NavLink
                        to="/"
                        className={`block py-2 text-black ${getLinkClass}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={`block py-2 text-black ${getLinkClass}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/bookings"
                        className={`block py-2 text-black ${getLinkClass}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Bookings
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={`block py-2 text-black ${getLinkClass}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="block border px-4 py-2 rounded text-gray-700 hover:border-purple-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Register
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
