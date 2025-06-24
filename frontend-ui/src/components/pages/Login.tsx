import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");

        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            setErrorMessage("Invalid email address!");
            return;
        }

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters long");
            return;
        }

        const loginDetails = { email, password };

        try {
            const response = await axios.post("http://localhost:3000/auth/login", loginDetails);

            if (response.status !== 200) {
                setErrorMessage(response.data.message || "Login failed");
                return;
            }

            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);

            setEmail("");
            setPassword("");

            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(error.response?.data?.error || "An error occurred during login");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome back</h2>
                </div>
                <button className="w-full cursor-pointer text-black font-semibold flex items-center justify-center gap-0">
                    <img src="/google.png" alt="Google" className="h-6 w-12" />
                    Continue with Google
                </button>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-bg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            placeholder="Enter your email..."
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
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                required
                                className="pr-10 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-800 cursor-pointer sm:h-5 sm:w-5" />
                                ) : (
                                    <Eye className="h-4 w-4 text-gray-800 cursor-pointer sm:h-5 sm:w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {errorMessage && <div className="text-red-600 text-sm text-center">{errorMessage}</div>}

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/register")}
                                className="text-purple-600 hover:text-purple-700 underline cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-purple-800 hover:bg-purple-700 cursor-pointer text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300 shadow-lg"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
