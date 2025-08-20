import { Progress } from '@/features/globals/ui/components/progress'
import { Skeleton } from '@/features/globals/ui/components/skeleton'
import Link from 'next/link'
import React from 'react'

interface Props {
    course: {
        isSubscript: boolean
    }
}
const CardCourse = ({ course }: Props) => {
    return (
        <Link href={"/courses/watch/sddfdfdfj"} className=' p-4'>
            <div className="space-y-4">
                <div className="relative rounded-2xl bg-muted-foreground/15 h-50 w-full">
                    {course.isSubscript && (
                        <div className="px-4 absolute bottom-3 left-0 right-0 z-20 w-full">
                            <Progress className="[&>div]:bg-[#01a0fe] [&>div]:h-1]" value={33} />
                        </div>
                    )}
                </div>
                <div className="flex gap-2 items-center justify-between px-4">
                    <h2>Ebraim Sambo</h2>

                    <div className="text-sm">
                        ⭐ 4.5
                    </div>
                </div>
                <div className="flex gap-2 px-2">
                    <Skeleton className='h-12 w-full max-w-12 bg-muted-foreground/15 rounded-full' />
                    <h3 className=''>
                        Bootcamp completo de ciência de dados, aprendizagem automática, DL, PNL
                    </h3>
                </div>
            </div>
        </Link>
    )
}

export default CardCourse