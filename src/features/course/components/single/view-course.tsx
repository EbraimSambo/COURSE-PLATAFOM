import React from 'react'
import PayerVideo from '../player/payer-video'
import TeacherInfoCourse from '../teacher/teacher-info-course'
import { Separator } from '@/features/globals/ui/components/separator'
import CourseProgress from './course-progress'
import PlaylistModule from '../player/playlist-module'
import ContentCourse from './content-course'

const ViewCourse = ({ REF }: { REF: string }) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className="col-span-2">
                 <PayerVideo />
                 <ContentCourse />
            </div>
           <div className="">
                <TeacherInfoCourse />
                <Separator className='m-8'/>
                <CourseProgress />
                <Separator className='m-8 mb-4 '/>
                <PlaylistModule />
           </div>
        </div>
    )
}

export default ViewCourse