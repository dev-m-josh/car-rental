import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Car, Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch(logout());
        setIsLoggedIn(false);
        setIsMenuOpen(false);
        navigate("/login");
    };

    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-purple-600 underline" : "text-gray-700 hover:text-purple-600";

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="w-full px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2">
                    <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center">
                        <Car className="text-white font-bold text-lg" />
                    </div>
                    <span className="text-xl font-bold text-purple-600">DriveConnect</span>
                </NavLink>

                {/* Hamburger Icon - visible on small screens */}
                <button className="lg:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={28} />
                </button>

                {/* Desktop Nav */}
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

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    {isLoggedIn ? (
                        <>
                            <NavLink
                                to="/profile"
                                className="px-4 py-2 border rounded-md text-gray-700 hover:border-purple-600 transition-colors"
                            >
                                Profile
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="lg:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
                    <NavLink to="/" className={`${getLinkClass} block text-black`} onClick={() => setIsMenuOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={`${getLinkClass} block text-black`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/bookings"
                        className={`${getLinkClass} block text-black`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Bookings
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={`${getLinkClass} block text-black`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dashboard
                    </NavLink>

                    {isLoggedIn ? (
                        <>
                            <NavLink
                                to="/profile"
                                className="block border px-4 py-2 rounded text-gray-700 hover:border-purple-500 transition-colors w-full"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Profile
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                            >
                                Logout
                            </button>
                            x
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/profile"
                                className="block border px-4 py-2 rounded text-gray-700 hover:border-purple-500 transition-colors w-full"
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
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
