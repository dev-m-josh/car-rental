import { Users, Fuel, Settings, Star } from "lucide-react";

const Cars = () => {
    const cars = [
        {
            id: 1,
            name: "Toyota Camry",
            category: "Economy",
            image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
            price: "45",
            rating: 4.7,
            passengers: 5,
            transmission: "Automatic",
            fuel: "Gasoline",
            features: ["Fuel Efficient", "Bluetooth", "Backup Camera", "Cruise Control"],
        },
        {
            id: 2,
            name: "Honda CR-V",
            category: "Compact SUV",
            image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
            price: "65",
            rating: 4.6,
            passengers: 5,
            transmission: "Automatic",
            fuel: "Gasoline",
            features: ["All-Wheel Drive", "Spacious Interior", "Honda Sensing", "Cargo Space"],
        },
        {
            id: 3,
            name: "Porsche 911",
            category: "Sports Car",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
            price: "199",
            rating: 5.0,
            passengers: 2,
            transmission: "Manual",
            fuel: "Gasoline",
            features: ["High Performance", "Sport Mode", "Premium Sound", "Racing Heritage"],
        },
    ];

    return (
        <section id="cars" className="py-20 bg-white pt-5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose from our carefully curated selection of vehicles, from eco-friendly options to luxury
                        sports cars. Every car is maintained to the highest standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <div
                            key={car.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                        >
                            <div className="relative">
                                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {car.category}
                                </div>
                                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="text-sm font-medium ml-1 text-black">{car.rating}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{car.name}</h3>

                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <div className="flex items-center">
                                        <Users className="w-4 h-4 mr-1" />
                                        {car.passengers} passengers
                                    </div>
                                    <div className="flex items-center">
                                        <Settings className="w-4 h-4 mr-1" />
                                        {car.transmission}
                                    </div>
                                    <div className="flex items-center">
                                        <Fuel className="w-4 h-4 mr-1" />
                                        {car.fuel}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {car.features.slice(0, 2).map((feature, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {car.features.length > 2 && (
                                        <span className="text-gray-500 text-xs">+{car.features.length - 2} more</span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                                        <span className="text-gray-600">/day</span>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2 rounded transition-colors duration-300">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cars;
