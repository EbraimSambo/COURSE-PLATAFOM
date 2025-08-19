import { Separator } from '@/features/globals/ui/components/separator'
import Image from 'next/image'
import React from 'react'

const DescriptionCourse = () => {
    return (
        <div className='h-full'>
            <div className="flex items-center gap-4 py-2">
                <div className="">
                    <h4 className='text-sm font-bold'>4.5 ⭐ </h4>
                    <p className='text-sm'>Reviews</p>
                </div>
                <span className="h-10 w-[1px] bg-muted-foreground" />
                <div className="flex items-center gap-4">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-3 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div className="">
                                <Image alt=''
                                    className='rounded-full'
                                    src={"https://avatars.githubusercontent.com/u/107747841?v=4"} width={30} height={30} />
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <h4 className='text-sm font-bold'>4000 </h4>
                        <p className='text-sm'>Inscritos</p>
                    </div>
                </div>
                <span className="h-10 w-[1px] bg-muted-foreground" />
                <div className="">
                    <h4 className='text-sm font-bold'>Medio</h4>
                    <p className='text-sm'>Nivel</p>
                </div>
                <span className="h-10 w-[1px] bg-muted-foreground" />
                <div className="">
                    <h4 className='text-sm font-bold'>Portugues</h4>
                    <p className='text-sm'>Lingua</p>
                </div>
            </div>
            <Separator className='my-4' />
            <p className="w-full max-w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique sunt eaque voluptatem esse quo.
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Placeat repellendus similique debitis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui,
                modi nesciunt esse vel nisi enim mollitia atque sed quia
            </p>
        </div>
    )
}

export default DescriptionCourse