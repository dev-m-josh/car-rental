// import { Search, MapPin, Calendar } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className=" lg:pt-10 sm:pt-0 lg:pb-8 relative min-h-full flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-300/15 rounded-full blur-xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 mt-7">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="text-white space-y-8">
                        <div className="space-y-6 mb-1">
                            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                                Online Car
                                <span className="block text-yellow-400 italic font-light">BOOKING</span>
                            </h1>
                            <div className="text-8xl text-yellow-400 font-serif lg:pb-0">"</div>
                        </div>

                        <p className="text-xl text-blue-100 max-w-md leading-relaxed pt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>

                        <button className="bg-yellow-500 hover:bg-yellow-600 outline-0 text-black font-semibold px-8 py-4 rounded-full cursor-pointer transition-colors duration-300 shadow-lg">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Right side - Car image without background */}
                    <div className="relative flex items-center justify-center">
                        <img src="/image.png" alt="Blue BMW Car" className="w-full max-w-lg h-auto object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
