"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dataSidebar } from './data/data-sidebar'
import { RiLogoutBoxLine } from '@remixicon/react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathName = usePathname()
    return (
        <aside className='flex justify-between flex-col w-[80px] py-5 items-center bg-background border-r'>
            <div className="flex flex-col items-center gap-8">
                <Link href={"/"}>
                    <Image src={"/images/logo.png"} alt='LOGO-APP' height={35} width={35} />
                </Link>
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
                <RiLogoutBoxLine />
            </button>
        </aside>
    )
}

export default Sidebar