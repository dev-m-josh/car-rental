interface SidebarProps {
    setActivePage: (page: string) => void;
}

const Sidebar = ({ setActivePage }: SidebarProps) => {
    return (
        <div className="w-64 bg-gray-800 text-white p-6">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <ul className="space-y-4">
                <li onClick={() => setActivePage("dashboard")} className="cursor-pointer hover:text-gray-300">
                    Dashboard
                </li>
                <li onClick={() => setActivePage("users")} className="cursor-pointer hover:text-gray-300">
                    Users
                </li>
                <li onClick={() => setActivePage("cars")} className="cursor-pointer hover:text-gray-300">
                    Cars
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
