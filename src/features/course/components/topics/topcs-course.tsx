"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/features/globals/ui/components/carousel'
import React from 'react'

const TopicsCourse = () => {
    return (
        <div className='bg-background p-4 sticky top-0 z-10'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className='max-w-[95%] mx-auto'
            >
                          <CarouselContent>
                    {Array.from({ length: 18 }, (_, i) => (
                        <CarouselItem 
                            key={i} 
                            className="w-auto flex-none" // 👈 importante
                        >
                            <div className="py-2 px-4 bg-muted-foreground/15 rounded-2xl text-sm whitespace-nowrap">
                                Topic {i}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='cursor-pointer' />
                <CarouselNext className='cursor-pointer' />
            </Carousel>
        </div>
    )
}

export default TopicsCourse