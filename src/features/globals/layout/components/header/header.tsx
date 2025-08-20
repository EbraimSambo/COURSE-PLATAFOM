"use client"
import React from 'react'
import NotificationButton from './partials/notification/notification-button'
import UserMenu from './partials/user/user-menu'
import SearchInputApp from './partials/search-app'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='py-4 flex items-center justify-between'>
            <Link href={"/"}>
                <div className="flex items-center gap-2">
                    <Image src={"/images/logo.png"} alt='LOGO-APP' height={35} width={35} />
                    <h2 className='text-2xl font-bold'>Cursos</h2>
                </div>
            </Link>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <SearchInputApp />
                    <NotificationButton />
                </div>
                <UserMenu />
            </div>
        </header>
    )
}

export default Header