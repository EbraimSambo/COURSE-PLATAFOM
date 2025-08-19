import React from 'react'
import Sidebar from './components/sidbar/sidebar';
import Header from './components/header/header';
import { Separator } from '../ui/components/separator';
import { ScrollArea } from '../ui/components/scroll-area';

const AppLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="w-full h-full px-8">
                <Header />
                <Separator />
                <main className='flex h-full w-full'>
                    <ScrollArea className="h-[91vh] w-full pt-4">
                        {children}
                    </ScrollArea>
                </main>
            </div>
        </div>
    )
}

export default AppLayout