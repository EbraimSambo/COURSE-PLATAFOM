"use client"
import React from 'react'

import { ThemeProvider as NextThemesProvider } from "next-themes"
const AppProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </NextThemesProvider>
    )
}

export default AppProvider