"use client"
import React from 'react'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ProgressProvider } from '@bprogress/next/app';
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
            <ProgressProvider
                height="4px"
                color="#01a0fe"
                options={{ showSpinner: false }}
                shallowRouting
            >
                {children}
            </ProgressProvider>
        </NextThemesProvider>
    )
}

export default AppProvider