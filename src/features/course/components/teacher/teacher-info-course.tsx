import { Skeleton } from '@/features/globals/ui/components/skeleton'
import React from 'react'

const TeacherInfoCourse = () => {
    return (
        <div className="flex gap-4">
            <Skeleton className='h-14 w-full max-w-14 bg-muted-foreground/15 rounded-full' />
            <div className="space-y-4">
                <div className="">
                    <h2 className=' font-bold'>Ebraim Sambo</h2>
                    <p className='text-sm'>Doutorando em Computação Gráfica </p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt sequi molestiae?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, repellat enim!
                </p>
            </div>
        </div>
    )
}

export default TeacherInfoCourse