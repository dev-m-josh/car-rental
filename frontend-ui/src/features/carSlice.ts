// Import required functions and types from Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a single car object (CarType)
export type CarType = {
    carID: number; // Unique identifier for the car
    carModel: string; // Model name of the car
    year: string; // Car's manufacturing year, stored as a string (ISO date format)
    color: string; // Car's color
    rentalRate: number; // Cost to rent the car per day
    availability: boolean; // Whether the car is available for rent
    locationID: number; // Foreign key to reference the car's location
};

// Used only when creating a new car (no carID yet)
export type NewCarType = Omit<CarType, "carID">;

// Define the shape of the Redux state slice for cars
interface CarState {
    cars: CarType[]; // Array to hold multiple car objects
    loading: boolean; // Indicates if data is currently being fetched
    error: string | null; // Holds any error message or null if there's no error
}

// Initial state for the car slice
const initialState: CarState = {
    cars: [], // Start with an empty list of cars
    loading: false, // Not loading by default
    error: null, // No error initially
};

// -------------------- ASYNC THUNKS -------------------- //

// Thunk to fetch all cars from the backend API
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    // Send a GET request to fetch cars
    const res = await fetch("http://localhost:3000/cars");
    // Parse the JSON response
    const data = await res.json();
    return data; // This data will be passed to the fulfilled reducer
});

// Thunk to delete a car by ID
export const deleteCar = createAsyncThunk("cars/deleteCar", async (carID: number) => {
    // Send a DELETE request to the API to remove the car
    await fetch(`http://localhost:3000/cars/${carID}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    return carID; // Return the ID of the deleted car to update state
});

// Async thunk to update a car
export const updateCar = createAsyncThunk(
    "cars/updateCar",
    async (updatedCar: CarType) => {
        const res = await fetch(`http://localhost:3000/cars/${updatedCar.carID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedCar),
        });

        const data = await res.json();
        return data; // Return updated car
    }
);

export const addCar = createAsyncThunk("cars/addCar", async (newCar: NewCarType, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3000/cars", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCar),
        });

        if (!res.ok) throw new Error("Failed to add car");
        return await res.json();
    } catch (err: unknown) {
        let message = "An unknown error occurred";
        if (err instanceof Error) {
            message = err.message;
        }
        return thunkAPI.rejectWithValue(message);
    }
});

// Create the car slice
const carSlice = createSlice({
    name: "cars", // Name of the slice (used as prefix for actions)
    initialState, // Set the initial state
    reducers: {}, // No traditional reducers used here (only extraReducers)

    // extraReducers handles the lifecycle of async thunks
    extraReducers: (builder) => {
        builder
            // When fetchCars is pending (before API call finishes)
            .addCase(fetchCars.pending, (state) => {
                state.loading = true; // Set loading to true
                state.error = null; // Clear any previous errors
            })

            // When fetchCars is fulfilled (data is received)
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.loading = false; // Stop loading
                state.cars = action.payload; // Store the fetched cars in state
            })

            // When fetchCars fails
            .addCase(fetchCars.rejected, (state, action) => {
                state.loading = false; // Stop loading
                // Set error message if available, or default error message
                state.error = action.error.message || "Failed to fetch cars.";
            })

            // --- DELETE CAR --- //

            // When deleteCar is fulfilled (car is deleted)
            .addCase(deleteCar.fulfilled, (state, action: PayloadAction<number>) => {
                // Filter out the deleted car from the state
                state.cars = state.cars.filter((car) => car.carID !== action.payload);
            });

        // --- UPDATE CAR --- //

        // When updateCar is fulfilled (car is updated)
        builder.addCase(updateCar.fulfilled, (state, action: PayloadAction<CarType>) => {
            // Find the index of the updated car in the state
            const index = state.cars.findIndex((car) => car.carID === action.payload.carID);
            if (index !== -1) {
                // Update the car in the state
                state.cars[index] = action.payload;
            }
        });

        // --- ADD CAR --- //
        // When addCar is fulfilled (car is added)
        builder
            .addCase(addCar.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addCar.fulfilled, (state, action) => {
                state.loading = false;
                state.cars.push(action.payload);
            })
            .addCase(addCar.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add car.";
            });

    },
});

// Export the reducer function so it can be added to the Redux store
export default carSlice.reducer;
