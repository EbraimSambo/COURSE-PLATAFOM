import { Button } from '@/features/globals/ui/components/button'
import { Edit, Languages } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const UserTab = () => {
    return (
        <div>
            <h3 className="text-lg font-medium">Configurações da Conta</h3>
            <p className="text-sm text-muted-foreground">
                Gerencie suas informações de perfil e preferências da conta.
            </p>
            <div className="mt-4 space-y-8">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="relative h-14 w-14">
                            <Image alt='user'
                                fill
                                className='rounded-full'
                                src={"https://avatars.githubusercontent.com/u/107747841?v=4"}
                                priority />
                        </div>
                        <div className="space-y-[1px]">
                            <h3 className="text-sm">
                                Ebraim Sambo
                            </h3>
                            <p className="text-xs"> ebraisambo@gmail.com </p>
                        </div>
                    </div>
                    <Button className='rounded-full' variant={"outline"}>
                        Gerenciar
                    </Button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm">Idioma</h2>
                        <Languages className='size-4' />
                    </div>
                    <Button className='rounded-full' variant={"outline"}>
                        Gerenciar
                    </Button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm">Informações</h2>
                        <Edit className='size-4' />
                    </div>
                    <Button className='rounded-full' variant={"outline"}>
                        Editar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserTab
