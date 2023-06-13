'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import { theme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import SideComments from './components/sideComments/sideComments';
import { Providers } from './provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className='bg-background'>
          <Providers>
            <Navbar />
            <div className="main">
              <Sidebar />
              <SideComments />

              {children}
            </div>
          </Providers>
        </body>
      </ThemeProvider>
    </html>
  )
}
