import GetCars from "./GetCars";
import { Users } from "./Users";

interface MainContentProps {
    activePage: string;
}

const MainContent = ({ activePage }: MainContentProps) => {
    return (
        <div className="flex-1 p-8 bg-gray-600">
            {activePage === "dashboard" && <h1 className="text-3xl">This is for dashboard</h1>}
            {activePage === "users" && <Users />}
            {activePage === "cars" && <GetCars />}
        </div>
    );
};

export default MainContent;
