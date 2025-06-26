import { useState } from "react";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";
export const AdminDash = () => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <div className="flex min-h-screen mt-16">
            <Sidebar setActivePage={setActivePage} />
            <MainContent activePage={activePage} />
        </div>
    );
};
