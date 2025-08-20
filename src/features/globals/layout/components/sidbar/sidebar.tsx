"use client"
import Link from 'next/link'
import React from 'react'
import { dataSidebar } from './data/data-sidebar'
import { RiMenuLine, RiQuestionLine } from '@remixicon/react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathName = usePathname()
    return (
        <aside className='flex justify-between flex-col w-[80px] py-5 items-center bg-background border-r'>
            <div className="flex flex-col items-center gap-8">
            <button className='flex items-center justify-center h-10 w-10 cursor-pointer hover:scale-90'>
                <RiMenuLine className='size-6' />
            </button>
                <ul className='space-y-4'>
                    {dataSidebar.map((item) => {
                        return (
                            <li key={item.label} className='hover:scale-90 transition-all'>
                                <Link href={item.href} className={``}>
                                    {pathName == item.href ? <item.iconEnabled /> : <item.iconDisabled />}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <button className='flex items-center justify-center h-10 w-10 cursor-pointer'>
                <RiQuestionLine />
            </button>
        </aside>
    )
}

export default Sidebar