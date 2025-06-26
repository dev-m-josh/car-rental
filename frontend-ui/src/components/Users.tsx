import React, { useState, useEffect } from "react";

type User = {
    customerID: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isAdmin: boolean;
};

const USERS_PER_PAGE = 10;

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/customer");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleActionChange = (action: string, user: User) => {
        switch (action) {
            case "update":
                if (confirm(`Do you want to update ${user.firstName}?`)) {
                    alert(`Update user: ${user.firstName}`);
                }
                break;
            case "delete":
                if (confirm(`Are you sure you want to delete ${user.firstName}?`)) {
                    const deleteUser = async () => {
                        try {
                            const response = await fetch(`http://localhost:3000/customer/delete/${user.customerID}`, {
                                method: "DELETE",
                                headers: { "Content-Type": "application/json" },
                            });
                            if (!response.ok) throw new Error(`${response.statusText}`);
                            setUsers((prev) => prev.filter((u) => u.customerID !== user.customerID));
                        } catch (err) {
                            console.error("Error deleting user:", err);
                            alert(`Failed to delete user.`);
                        }
                    };
                    deleteUser();
                }
                break;
        }
    };

    // Pagination logic
    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
    const startIdx = (currentPage - 1) * USERS_PER_PAGE;
    const paginatedUsers = users.slice(startIdx, startIdx + USERS_PER_PAGE);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>

            <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Phone Number</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedUsers.map((user) => (
                            <tr key={user.customerID} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                                    {user.firstName} {user.lastName}
                                </td>
                                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{user.phoneNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded ${
                                            user.isAdmin ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                                        }`}
                                    >
                                        {user.isAdmin ? "Admin" : "Customer"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <select
                                        onChange={(e) => handleActionChange(e.target.value, user)}
                                        defaultValue=""
                                        className="text-black border border-gray-300 rounded px-2 py-1"
                                    >
                                        <option value="" disabled>
                                            Actions
                                        </option>
                                        <option value="update">Update</option>
                                        <option value="delete">Delete</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-center items-center gap-40">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 text-sm font-medium rounded ${
                        currentPage === 1
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                    }`}
                >
                    Previous
                </button>
                <span className="text-sm text-white">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 text-sm font-medium rounded ${
                        currentPage === totalPages
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
