'use client'
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";


export default function basicLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="main">
                <Sidebar />
                {children}
            </div>
        </>
    )
}
