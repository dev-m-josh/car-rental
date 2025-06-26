import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCars, deleteCar, updateCar, addCar } from "../features/carSlice";
import type { CarType, NewCarType } from "../features/carSlice";

export default function GetCars() {
    const dispatch = useAppDispatch();
    const { cars, loading, error } = useAppSelector((state) => state.cars);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    const handleActionChange = (action: string, car: CarType) => {
        switch (action) {
            case "update":
                if (confirm(`Do you want to update ${car.carModel}?`)) {
                    setSelectedCar(car);
                    setIsEditing(true);
                }
                break;
            case "delete":
                if (confirm(`Are you sure you want to delete ${car.carModel}?`)) {
                    dispatch(deleteCar(car.carID));
                    alert(`Car ${car.carModel} has been deleted.`);
                }
                break;
            case "toggleAvailability":
                alert(`Car ${car.carModel} is now ${car.availability ? "not available" : "available"}.`);
                break;
        }
    };

    if (loading) return <p className="text-center text-blue-500 text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

    return (
        <div className="p-6">
            {/* Edit Car Modal */}
            {isEditing && selectedCar && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Edit Car: {selectedCar.carModel}</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const updatedCar: CarType = {
                                    ...selectedCar,
                                    carModel: form.model.value,
                                    year: form.year.value,
                                    color: form.color.value,
                                    rentalRate: parseFloat(form.rate.value),
                                    availability: form.availability.checked,
                                };
                                dispatch(updateCar(updatedCar));
                                setIsEditing(false);
                            }}
                            className="space-y-4"
                        >
                            <input
                                name="model"
                                defaultValue={selectedCar.carModel}
                                required
                                className="w-full border p-2 rounded"
                                placeholder="Model"
                            />
                            <input
                                name="year"
                                defaultValue={selectedCar.year}
                                required
                                className="w-full border p-2 rounded"
                                placeholder="Year"
                            />
                            <input
                                name="color"
                                defaultValue={selectedCar.color}
                                required
                                className="w-full border p-2 rounded"
                                placeholder="Color"
                            />
                            <input
                                name="rate"
                                type="number"
                                defaultValue={selectedCar.rentalRate}
                                required
                                className="w-full border p-2 rounded"
                                placeholder="Rental Rate"
                            />
                            <div className="flex items-center space-x-2">
                                <input name="availability" type="checkbox" defaultChecked={selectedCar.availability} />
                                <label>Available</label>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Car Modal */}
            {showAddForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Add New Car</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;

                                const newCar: NewCarType = {
                                    carModel: form.model.value,
                                    year: form.year.value,
                                    color: form.color.value,
                                    rentalRate: parseFloat(form.rate.value),
                                    availability: form.availability.checked,
                                    locationID: 1,
                                };

                                dispatch(addCar(newCar));
                                setShowAddForm(false);
                                form.reset();
                            }}
                            className="space-y-4"
                        >
                            <input name="model" required className="w-full border p-2 rounded" placeholder="Model" />
                            <input name="year" required className="w-full border p-2 rounded" placeholder="Year" />
                            <input name="color" required className="w-full border p-2 rounded" placeholder="Color" />
                            <input
                                name="rate"
                                type="number"
                                required
                                className="w-full border p-2 rounded"
                                placeholder="Rental Rate"
                            />
                            <div className="flex items-center space-x-2">
                                <input name="availability" type="checkbox" defaultChecked />
                                <label>Available</label>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowAddForm(false)}
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                >
                                    Add Car
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Car List */}
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-medium">Total Cars: {cars.length}</p>
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Car
                    </button>
                </div>

                {cars.length === 0 ? (
                    <p className="text-center text-gray-500">No cars available to display.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="border px-4 py-2">Car Model</th>
                                    <th className="border px-4 py-2">Year</th>
                                    <th className="border px-4 py-2">Color</th>
                                    <th className="border px-4 py-2">Rental Rate</th>
                                    <th className="border px-4 py-2">Availability</th>
                                    <th className="border px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map((car) => (
                                    <tr key={car.carID} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{car.carModel}</td>
                                        <td className="border px-4 py-2">{new Date(car.year).getFullYear()}</td>
                                        <td className="border px-4 py-2">{car.color}</td>
                                        <td className="border px-4 py-2">${car.rentalRate}</td>
                                        <td className="border px-4 py-2">
                                            {car.availability ? "Available" : "Not Available"}
                                        </td>
                                        <td className="border px-4 py-2">
                                            <select
                                                onChange={(e) => handleActionChange(e.target.value, car)}
                                                defaultValue=""
                                                className="border p-1 rounded"
                                            >
                                                <option value="" disabled>
                                                    Actions
                                                </option>
                                                <option value="update">Update</option>
                                                <option value="delete">Delete</option>
                                                <option value="toggleAvailability">
                                                    {car.availability ? "Mark Unavailable" : "Mark Available"}
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
