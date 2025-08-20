"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/features/globals/ui/components/dropdown-menu'
import { RiEqualizerLine, RiLogoutBoxLine,RiUser6Line } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'
import SettingDialog from './setting-dialog'
import Link from 'next/link'

const UserMenu = () => {
    const [settingDialog, setSettingDialog] = React.useState(false)
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
            <DropdownMenuContent className='w-[400px] rounded-4xl p-4 ' align="end" sideOffset={5}>
                <div className="w-full flex items-center justify-center flex-col gap-4">
                    <div className="relative h-30 w-30">
                        <Image alt='user'
                            fill
                            className='rounded-full'
                            src={"https://avatars.githubusercontent.com/u/107747841?v=4"}
                            priority />
                    </div>
                    <div className=" text-center">
                        <h2 className='text-lg font-semibold'>Ebraim Sambo</h2>
                        <h2>email@gmail.com</h2>
                    </div>
                </div>
                <div className="rounded-3xl shadow-xs border border-muted mt-6 bg-background">
                    <DropdownMenuItem onClick={() => setSettingDialog(true)} className='px-8 py-4 cursor-pointer rounded-t-3xl hover:bg-blue-50'>
                        <RiUser6Line />
                        <p>Perfil</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='px-8 py-4  cursor-pointer border-y-2 border-muted'>
                        <RiEqualizerLine />
                        <p>COnfiguracoes</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='px-8 py-4  rounded-b-3xl cursor-pointer'>
                        <RiLogoutBoxLine />
                        <p>Terminer Sessao</p>
                    </DropdownMenuItem>
                </div>
                <p className="text-center text-xs mt-4">
                    <Link href={"/"} className='hover:underline hover:text-sky-400' >Politicas de Privacidade</Link>
                </p>
            </DropdownMenuContent>
            <SettingDialog isOpen={settingDialog} setIsOpen={setSettingDialog} />
        </DropdownMenu>
    )
}

export default UserMenu