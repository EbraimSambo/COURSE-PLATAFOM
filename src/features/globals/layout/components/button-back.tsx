"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '../../ui/components/button';
import { RiArrowLeftLine } from '@remixicon/react';
import { BProgress } from "@bprogress/core";
const ButtonBack = () => {
    const router = useRouter();

    const goBack = React.useCallback(() => {
        BProgress.start();
        React.startTransition(() => {
            router.back();
            BProgress.done()
        })
    }, [router])

    return (
        <Button onClick={goBack} className='fixed bottom-4 left-28 rounded-full h-12 w-12 p-0 cursor-pointer flex items-center justify-center'>
            <RiArrowLeftLine />
        </Button>
    )
}

export default ButtonBack