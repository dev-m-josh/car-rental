import { Car, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Car className="h-8 w-8 text-car-blue-400" />
                            <span className="text-2xl font-bold">DriveConnect</span>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Your trusted partner for premium car rentals. Experience the freedom of the road with our
                            exceptional fleet and service.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-6 h-6 text-gray-400 hover:text-car-blue-400 cursor-pointer transition-colors" />
                            <Twitter className="w-6 h-6 text-gray-400 hover:text-car-blue-400 cursor-pointer transition-colors" />
                            <Instagram className="w-6 h-6 text-gray-400 hover:text-car-blue-400 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#cars" className="text-gray-300 hover:text-white transition-colors">
                                    Our Fleet
                                </a>
                            </li>
                            <li>
                                <a href="#locations" className="text-gray-300 hover:text-white transition-colors">
                                    Locations
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Car Rental
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Long-term Lease
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Corporate Fleet
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Wedding Cars
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Airport Transfer
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-car-blue-400" />
                                <span className="text-gray-300">123 Main Street, Nanyuki, NY 10001</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-car-blue-400" />
                                <span className="text-gray-300">+ (254) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-car-blue-400" />
                                <span className="text-gray-300">info@driveconnect.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">© 2024 DriveConnect. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
