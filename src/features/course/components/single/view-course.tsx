import React from 'react'
import PlayerVideo from '../player/player-video'
import TeacherInfoCourse from '../teacher/teacher-info-course'
import { Separator } from '@/features/globals/ui/components/separator'
import CourseProgress from './course-progress'
import PlaylistModule from '../player/playlist-module'
import ContentCourse from './content-course'
import { ScrollArea } from '@/features/globals/ui/components/scroll-area'

const ViewCourse = ({  }: { REF: string }) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className="col-span-2">
                 <PlayerVideo />
                 <ContentCourse />
            </div>
            <ScrollArea className="h-[85vh] w-full pt-4 px-6">
                <TeacherInfoCourse />
                <Separator className='m-8'/>
                <CourseProgress />
                <Separator className='m-8 mb-4 '/>
                <PlaylistModule />
           </ScrollArea>
        </div>
    )
}

export default ViewCourse