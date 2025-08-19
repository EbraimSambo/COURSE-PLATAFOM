import { Skeleton } from '@/features/globals/ui/components/skeleton'
import React from 'react'

const PlayerVideo = () => {
  return (
    <Skeleton className='h-[540px] w-full bg-muted-foreground/15 rounded-2xl' />
  )
}

export default PlayerVideo