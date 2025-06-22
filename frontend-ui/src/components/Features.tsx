import { Shield, Clock, MapPin, Users, Star, Headphones } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Shield,
            title: "Fully Insured",
            description: "All our vehicles come with comprehensive insurance coverage for your peace of mind.",
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock customer support to assist you whenever you need help.",
        },
        {
            icon: MapPin,
            title: "Multiple Locations",
            description: "Convenient pickup and drop-off locations across major cities nationwide.",
        },
        {
            icon: Users,
            title: "Easy Booking",
            description: "Simple online booking process with instant confirmation and flexible options.",
        },
        {
            icon: Star,
            title: "Premium Fleet",
            description: "Well-maintained, latest model vehicles from top automotive brands.",
        },
        {
            icon: Headphones,
            title: "Customer First",
            description: "Dedicated to providing exceptional service and unforgettable experiences.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose DriveConnect?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience the difference with our premium car rental service. We're committed to making your
                        journey smooth, safe, and memorable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
