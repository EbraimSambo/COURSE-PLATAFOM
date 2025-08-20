import CardCourse from '@/features/course/components/card/card-course'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/features/globals/ui/components/carousel'
import React from 'react'
const SuggestCourse = () => {
    return (
        <section className='px-4'>
            <h2 className='pl-[4%] text-2xl font-bold'>O que aprender a seguir </h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className='max-w-[95%] mx-auto'
            >
                <CarouselContent>
                    {Array.from({ length: 8 }, (_, i) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={i}>
                            <div className="pl-1">
                                <CardCourse course={{ isSubscript: false }} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='cursor-pointer' />
                <CarouselNext className='cursor-pointer' />
            </Carousel>
        </section>
    )
}

export default SuggestCourse