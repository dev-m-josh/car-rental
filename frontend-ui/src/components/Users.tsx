import React, { useState, useEffect } from "react";

type User = {
    customerID: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isAdmin: boolean;
};

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/customer");
            const data = await response.json();
            console.log(data);
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
                // Handle update logic
                if (confirm(`Do you want to update ${user.firstName}?`)) {
                    console.log("Updating user with ID:", user.customerID);
                    alert(`Update user: ${user.firstName}`);
                }
                break;
            case "delete":
                // Handle delete logic
                if (confirm(`Are you sure you want to delete ${user.firstName}?`)) {
                    const deleteUser = async () => {
                        try {
                            const response = await fetch(`http://localhost:3000/customer/delete/${user.customerID}`, {
                                method: "DELETE",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            });

                            if (!response.ok) {
                                throw new Error(`${response.statusText}`);
                            }

                            setUsers((prevUsers) => prevUsers.filter((u) => u.customerID !== user.customerID));
                        } catch (err) {
                            if (err instanceof Error) {
                                console.error("Error deleting user:", err);
                                alert(`Failed to delete user: ${err.message}`);
                            } else {
                                console.error("Unexpected error:", err);
                                alert("An unexpected error occurred while deleting the user.");
                            }
                        }
                    };
                    deleteUser();
                }
                break;
            default:
                break;
        }
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
                            <th className="px-6 py-3">Phone</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.customerID} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                                    {user.firstName} {user.lastName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{user.phoneNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded ${
                                            user.isAdmin ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                                        }`}
                                    >
                                        {user.isAdmin ? "Admin" : "Customer"}
                                    </span>
                                </td>
                                <td>
                                    <select onChange={(e) => handleActionChange(e.target.value, user)} defaultValue="">
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
        </div>
    );
};
