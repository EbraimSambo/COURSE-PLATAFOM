import React from 'react'
import Sidebar from './components/sidbar/sidebar';

const AppLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main>
               {children} 
            </main>
        </div>
    )
}

export default AppLayout