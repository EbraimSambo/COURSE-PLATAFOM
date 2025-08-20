"use client"
import { Input } from '@/features/globals/ui/components/input'
import { BProgress } from '@bprogress/core'
import { RiCloseLargeLine, RiSearch2Line } from '@remixicon/react'
import { useRouter } from 'next/navigation';
import { useQueryState } from "nuqs";
import React from 'react'

const SearchInputApp = () => {
    const router = useRouter()
    const [searchParam,] = useQueryState("q")

    const [searchQuery, setSearchQuery] = React.useState(
        searchParam ?? ""
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
                    className='cursor-pointer flex items-center justify-center h-10 w-10 hover:text-muted-foreground transition-all'>
                    <RiSearch2Line />
                </button>
            </div>
            <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-12 pl-11 focus-visible:ring-[#01a0fe] focus-visible:ring-offset-0'
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder='Pesquisar por cursos'
            />
            {searchQuery && (
                <div className="absolute pr-1 flex items-center justify-center top-0 right-0 h-full">
                    <button
                        onClick={() => setSearchQuery("")}
                        className='cursor-pointer flex items-center justify-center h-10 w-10 hover:text-muted-foreground transition-all'>
                        <RiCloseLargeLine className='size-4' />
                    </button>
                </div>
            )}
        </div>
    )
}

export default SearchInputApp