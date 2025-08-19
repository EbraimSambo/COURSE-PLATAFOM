"use client"
import { Input } from '@/features/globals/ui/components/input'
import { BProgress } from '@bprogress/core'
import { RiSearch2Line } from '@remixicon/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const SearchInputApp = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [searchQuery, setSearchQuery] = React.useState(
        searchParams?.get("q") ?? ""
    )

    const searchApp = React.useCallback(
        (query: string) => {
            if (!query) return
            BProgress.start()

            React.startTransition(() => {
                router.push(`/search?q=${encodeURIComponent(query)}`)
                BProgress.done()
            })
        },
        [router]
    )

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            searchApp(searchQuery)
        }
    }

    return (
        <div className="w-[400px] relative">
            <div className="absolute pl-1 flex items-center justify-center top-0 left-0 h-full">
                <button
                       disabled={!searchQuery}
                       onClick={() => searchApp(searchQuery)}
                    className='cursor-pointer flex items-center justify-center h-10 w-10 '>
                    <RiSearch2Line />
                </button>
            </div>
            <Input
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                className='h-12 pl-11'
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder='Pesquisar por cursos' />
        </div>
    )
}

export default SearchInputApp