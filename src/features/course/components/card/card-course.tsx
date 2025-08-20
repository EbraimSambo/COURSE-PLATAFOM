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
                <Skeleton className="rounded-2xl bg-muted-foreground/15 h-50 w-full" />
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