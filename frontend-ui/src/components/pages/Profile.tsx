import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = localStorage.getItem("token");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    const fullName = `${user.firstName || ""} ${user.lastName || ""}`;
    const initials = `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase();
    const accountType = user.isAdmin ? "Admin" : "Customer";
    const verified = user.isVerified ? "Yes" : "No";

    useEffect(() => {
        if (!token || !user.customerID) {
            setShowLoginModal(true);
        }
    }, [token, user]);

    const handleDeleteAccount = async () => {
        try {
            const response = await fetch(`http://localhost:3000/customer/delete/${user.customerID}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to delete account");
            }

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }

            alert("Account deleted successfully.");
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setShowDeleteModal(false);
            navigate("/login");
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("An error occurred while deleting your account. Please try again later.");
        }
    };

    if (showLoginModal) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-md shadow-md text-center max-w-sm w-full">
                    <h2 className="text-xl font-semibold text-purple-700 mb-4">Login Required</h2>
                    <p className="text-gray-700 mb-6">You must be logged in to view your profile.</p>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                    >
                        OK
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative max-w-4xl mx-auto mt-24 p-6 bg-white rounded-xl shadow-lg">
            <button
                onClick={() => navigate("/")}
                className="cursor-pointer absolute top-4 left-4 flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors"
            >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back</span>
            </button>

            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl font-bold mb-4">
                    {initials}
                </div>
                <h2 className="text-2xl font-bold text-purple-700">{fullName}</h2>
                <p className="text-gray-500">{user.email}</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <ProfileField label="Phone Number" value={user.phoneNumber || "N/A"} />
                <ProfileField label="Address" value={user.address || "N/A"} />
                <ProfileField label="Account Type" value={accountType} />
                <ProfileField label="Verified" value={verified} />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md transition">
                    Edit Profile
                </button>
                <button
                    onClick={() => setShowDeleteModal(true)}
                    className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition"
                >
                    Delete Account
                </button>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold text-red-600 mb-4">Confirm Account Deletion</h3>
                        <p className="text-gray-700 mb-6">
                            Are you sure you want to delete your account? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="cursor-pointer px-4 py-2 border rounded text-gray-700 hover:border-purple-600 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProfileField = ({ label, value }: { label: string; value: string }) => (
    <div className="w-full flex flex-col align-center justify-end">
        <span className="text-sm self-center text-gray-500">{label}</span>
        <span className="text-lg self-center font-medium text-gray-800">{value}</span>
    </div>
);

export default Profile;
