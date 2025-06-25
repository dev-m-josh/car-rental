import { useEffect, useState } from "react";

type CarType = {
    carID: number;
    carModel: string;
    year: Date;
    color: string;
    rentalRate: number;
    availability: boolean;
    locationID: number;
}


export default function GetCars() {

    // State to hold car data
    const [cars, setCars] = useState<CarType[]>([]);
    // State for loading status
    const [loading, setLoading] = useState(true);
    // State for error messages
    const [errorMessage, setErrorMessage] = useState("");

    const fetchCars = async () => {
        try {
            setLoading(true);

            const response = await fetch(`http://localhost:3000/cars`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // If response is not OK, throw an error
            if (!response.ok) {
                throw new Error(`${response.statusText}`);
            }

            const data = await response.json();

            // Check if response is an array
            if (Array.isArray(data)) {
                // Convert year strings to Date objects
                const formattedCars = data.map((car) => ({
                    ...car,
                    year: new Date(car.year),
                }));

                setCars(formattedCars);
            } else {
                throw new Error("Unexpected response format");
            }
        } catch (err) {
            if (err instanceof Error) {
                setErrorMessage(err.message);
            } else {
                console.error("Error fetching cars:", err);
                setErrorMessage("An unexpected error occurred while fetching cars.");
            }
        } finally {
            setLoading(false);
        }
    };

    // useEffect runs once on component mount
    useEffect(() => {
        fetchCars();
    }, []);

    const handleActionChange = (action: string, car: CarType) => {
        switch (action) {
            case "update":
                // Handle update logic
                if (confirm(`Do you want to update ${car.carModel}?`)) {
                    console.log("Updating car with ID:", car.carID);
                    alert(`Update car: ${car.carModel}`);
                }
                break;
            case "delete":
                // Handle delete logic
                if (confirm(`Are you sure you want to delete ${car.carModel}?`)) {
                    const deleteCar = async () => {
                        try {
                            const response = await fetch(`http://localhost:3000/cars/${car.carID}`, {
                                method: "DELETE",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            });

                            if (!response.ok) {
                                throw new Error(`${response.statusText}`);
                            }

                            setCars((prevCars) => prevCars.filter((c) => c.carID !== car.carID));
                        } catch (err) {
                            if (err instanceof Error) {
                                console.error("Error deleting car:", err);
                                alert(`Failed to delete car: ${err.message}`);
                            } else {
                                console.error("Unexpected error:", err);
                                alert("An unexpected error occurred while deleting the car.");
                            }
                        }
                        alert(`Car ${car.carModel} has been deleted.`);
                    };
                    deleteCar();
                }
                break;
            case "toggleAvailability":
                // Toggle car availability
                console.log("Toggling availability for:", car.carID);
                alert(`Car ${car.carModel} is now ${car.availability ? "not available" : "available"}.`);
                break;
            default:
                break;
        }
    };

    if (loading) return <p>Loading...</p>;
    if (errorMessage) return <p style={{ color: "red" }}>{errorMessage}</p>;

    return (
        <div className="cars-container">
            {cars.length === 0 ? (
                <div>No cars available to display.</div>
            ) : (
                <table className="cars-table">
                    <thead>
                        <tr>
                            <th>Car Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Rental Rate</th>
                            <th>Availability</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => (
                            <tr key={car.carID}>
                                <td>{car.carModel}</td>
                                <td>{car.year.getFullYear()}</td>
                                <td>{car.color}</td>
                                <td>$ {car.rentalRate}</td>
                                <td>{car.availability ? "Available" : "Not Available"}</td>
                                <td>
                                    <select onChange={(e) => handleActionChange(e.target.value, car)} defaultValue="">
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
            )}
        </div>
    );
}
