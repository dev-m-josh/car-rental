import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
export const Dashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <div className="flex h-screen mt-16">
            <Sidebar setActivePage={setActivePage} />
            <MainContent activePage={activePage} />
        </div>
    );
};
