import CardCourse from '@/features/course/components/card/card-course'
import React from 'react'

const MyCourse = () => {
    return (
        <section>
            <div className='grid grid-cols-4 gap-4'>
                {Array.from({ length: 5 }, (_, i) => (
                    <CardCourse course={{ isSubscript: true }} key={i} />
                ))}
            </div>
        </section>
    )
}

export default MyCourse