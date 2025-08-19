import Image from 'next/image'
import React from 'react'

const PointsUser = () => {
    return (
        <div className="bg-muted p-4 rounded-3xl">
            <div className="flex gap-4">
                <div className="relative h-25 w-25">
                    <Image alt='user'
                        fill
                        className='rounded-full'
                        src={"https://avatars.githubusercontent.com/u/107747841?v=4"}
                        priority />
                </div>
                <div className="space-y-1">
                    <h2 className='font-bold text-2xl'>Ebraim Sambo</h2>
                    <h3>Estudante de Direito</h3>
                    <div className="flex items-center gap-2">
                        <h2>🏆</h2>
                        <h2>500 Pontos</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex items-center flex-col gap-1 justify-center bg-muted-foreground/10 p-2 rounded-2xl">
                    <h4 className='text-lg font-bold text-center'>🏵️ 2</h4>
                    <p className='text-sm text-center'>Aulas</p>
                </div>
                <div className="flex items-center flex-col gap-1 justify-center bg-muted-foreground/10 p-2 rounded-2xl">
                    <h4 className='text-lg font-bold text-center'>🏵️ 40</h4>
                    <p className='text-sm text-center'>Cursos</p>
                </div>
                <div className="flex items-center flex-col gap-1 justify-center bg-muted-foreground/10 p-2 rounded-2xl">
                    <h4 className='text-lg font-bold text-center'>💎 40</h4>
                    <p className='text-sm text-center'>Certificados</p>
                </div>
            </div>
        </div>
    )
}

export default PointsUser