'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import { theme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import SideComments from './components/sideComments/sideComments';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <Navbar />
          <div className="main">
            <Sidebar />
            <SideComments />

            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
