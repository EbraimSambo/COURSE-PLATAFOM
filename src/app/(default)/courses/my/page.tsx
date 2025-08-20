import CardCourse from '@/features/course/components/card/card-course'
import React from 'react'

const page = () => {
  return (
    <section>
      <h2 className='text-2xl font-bold'>Meus cursos</h2>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, i) => (
            <div className="pl-1" key={i}>
              <CardCourse course={{ isSubscript: true }} />
            </div>
        ))}
      </div>
    </section>
  )
}

export default page