import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/features/globals/ui/components/dropdown-menu'
import Image from 'next/image'
import React from 'react'

const UserMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='cursor-pointer border-none outline-none w-full'>
                <div className="relative h-11 w-11">
                    <Image alt='user'
                        fill
                        className='rounded-full'
                        src={"https://avatars.githubusercontent.com/u/107747841?v=4"}
                        priority />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserMenu