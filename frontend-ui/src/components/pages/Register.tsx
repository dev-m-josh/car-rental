import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Password toggle
    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    //submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");
        console.log("Form submitted");

        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            setErrorMessage("Invalid email address!");
            return;
        }

        if (!phoneNumber.match(/^07\d{8}$/)) {
            setErrorMessage("Invalid phone number!");
            return;
        }

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters long");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        const userDetails = {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            password,
            isAdmin: false,
        };

        try {
            console.log("User registration details:", userDetails);

            // Reset form
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPhoneNumber("");
            setAddress("");

            alert("You have successfully registered! Please login to continue.");
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-150 w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="flex align-center justify-center gap-6">
                        <div className="w-full">
                            <label htmlFor="firstName" className="block text-bg font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setFirstName(value.charAt(0).toUpperCase() + value.slice(1));
                                }}
                                required
                                className="mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastName" className="block text-bg font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setLastName(value.charAt(0).toUpperCase() + value.slice(1));
                                }}
                                required
                                className="mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-bg font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-bg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-bg font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-bg font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="pr-10 mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-black cursor-pointer sm:h-5 sm:w-5" />
                                ) : (
                                    <Eye className="h-4 w-4 text-black cursor-pointer sm:h-5 sm:w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-bg font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="pr-10 mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPassword}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4 text-black cursor-pointer sm:h-5 sm:w-5" />
                                ) : (
                                    <Eye className="h-4 w-4 text-black cursor-pointer sm:h-5 sm:w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {errorMessage && <div className="text-red-600 text-sm text-center">{errorMessage}</div>}

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            If you already have an account,{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className="text-purple-600 hover:text-purple-700 underline cursor-pointer"
                            >
                                Login
                            </button>
                        </p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-purple-800 hover:bg-purple-700 cursor-pointer text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300 shadow-lg"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
