import { Input } from '@/features/globals/ui/components/input'
import { Separator } from '@/features/globals/ui/components/separator'
import { RiSearch2Fill, RiSearch2Line, RiSearchFill } from '@remixicon/react'
import React from 'react'
import NotificationButton from './partials/notification/notification-button'
import UserMenu from './partials/user/user-menu'

const Header = () => {
    return (
        <header className='py-4 flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Cursos</h2>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-[400px] relative">
                        <div className="absolute pl-1 flex items-center justify-center top-0 left-0 h-full">
                            <button className='flex items-center justify-center h-10 w-10 '>
                                <RiSearch2Line />
                            </button>
                        </div>
                        <Input
                            className='h-12 pl-11'
                            placeholder='Pesquisar por cursos' />
                    </div>
                    <NotificationButton />
                </div>
                <UserMenu />
            </div>
        </header>
    )
}

export default Header