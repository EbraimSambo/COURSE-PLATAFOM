import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/features/globals/ui/components/carousel'
import React from 'react'

const TopicsCourse = () => {
    return (
        <div className='my-4'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className='max-w-[95%] mx-auto'
            >
                <CarouselContent>
                    {Array.from({ length: 18 }, (_, i) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/12" key={i}>
                            <div className="pl-1">
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