'use client'
import Navbar from "../components/navbar/navbar";
import SideComments from "../components/sideComments/sideComments";
import Sidebar from "../components/sidebar/sidebar";


export default function basicLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="main">
                <Sidebar />
                <SideComments />

                {children}
            </div>
        </>
    )
}
