import React from "react";
import { Car, Users, Award, Shield, Clock, MapPin } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About DriveConnect</h1>
                        <p className="text-xl mb-8 text-purple-100">
                            Your trusted partner for premium car rentals since 2010. We're committed to providing
                            exceptional service and reliable vehicles for all your transportation needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Founded in 2010, DriveConnect started with a simple mission: to make car rentals
                                    easy, affordable, and reliable for everyone. What began as a small local business
                                    has grown into a trusted name in the car rental industry.
                                </p>
                                <p className="text-lg text-gray-600 mb-6">
                                    Today, we serve thousands of customers annually with our diverse fleet of
                                    well-maintained vehicles, from economy cars to luxury SUVs. Our commitment to
                                    excellence drives everything we do.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">10K+</div>
                                        <div className="text-sm text-gray-500">Happy Customers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">500+</div>
                                        <div className="text-sm text-gray-500">Vehicles</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">50+</div>
                                        <div className="text-sm text-gray-500">Locations</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/carlogo.png"
                                    alt="Carlogo"
                                    className="rounded-lg shadow-xl w-full h-96 object-fit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                            <p className="text-lg text-gray-600">
                                The principles that guide our service and define our commitment to you
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
                                <p className="text-gray-600">
                                    All our vehicles undergo rigorous safety inspections and regular maintenance to
                                    ensure your safety on the road.
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                                <p className="text-gray-600">
                                    Count on us for punctual service, well-maintained vehicles, and 24/7 customer
                                    support whenever you need assistance.
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
                                <p className="text-gray-600">
                                    Your satisfaction is our priority. We listen to your needs and go above and beyond
                                    to exceed your expectations.
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                                <p className="text-gray-600">
                                    From our premium fleet to our professional service, we maintain the highest
                                    standards in everything we do.
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Car className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                                <p className="text-gray-600">
                                    We continuously improve our services with the latest technology and innovative
                                    solutions for a better rental experience.
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
                                <p className="text-gray-600">
                                    With locations nationwide and flexible booking options, we make car rental
                                    convenient and accessible for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Meet the dedicated professionals who make your car rental experience exceptional
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Service</h3>
                                <p className="text-gray-600">
                                    Our friendly customer service team is available 24/7 to assist you with any
                                    questions or concerns.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Car className="w-12 h-12 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fleet Management</h3>
                                <p className="text-gray-600">
                                    Our expert fleet managers ensure every vehicle meets our high standards for safety
                                    and reliability.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Shield className="w-12 h-12 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Team</h3>
                                <p className="text-gray-600">
                                    Dedicated safety professionals who conduct regular inspections and maintenance on
                                    all our vehicles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
