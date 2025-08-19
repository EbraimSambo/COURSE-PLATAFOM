import { Progress } from '@/features/globals/ui/components/progress'
import React from 'react'

const CourseProgress = () => {
  return (
    <div className='pl-4 space-y-4'>
      <div className="space-y-2">
        <h2 className='text-xl font-bold'>Praticas de Programação Orientada a Objetos </h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="">23 lissoes </span>
          <span className="h-5 w-[1px] bg-muted-foreground" />
          <span className="">14 horas</span>
          <span className="h-5 w-[1px] bg-muted-foreground" />
          <span className="">12 aulas </span>
        </div>
      </div>
      <div className="p-4 rounded-2xl bg-muted-foreground/15 space-y-4">
        <div className="flex items-center justify-between">
          <h4>Seu Progresso</h4>
          <div className="flex items-center gap-2 text-sm">
            <span className="">23 lissoes </span>
            <span className="h-5 w-[1px] bg-muted-foreground" />
            <span className="">14:89 horas</span>
          </div>
        </div>
        <Progress className="[&>div]:bg-[#01a0fe]" value={33} />
      </div>
    </div>
  )
}

export default CourseProgress