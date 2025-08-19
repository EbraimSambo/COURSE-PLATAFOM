"use client"
import { CircularProgress } from '@/features/globals/custom/circular-progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/features/globals/ui/components/accordion'
import { Button } from '@/features/globals/ui/components/button'
import { ScrollArea } from '@/features/globals/ui/components/scroll-area'
import { RiPauseFill } from '@remixicon/react'
import React from 'react'

const PlaylistModule = () => {
    const [value, setValue] = React.useState(1)
    return (
        <div className='px-8'>
            <Accordion className='' type="single" defaultValue="item-1">
                <AccordionItem  className='' value="item-1">
                    <AccordionTrigger className='hover:no-underline cursor-pointer pb-0'>
                        <h2 className='text-lg font-semibold'>Modulo 2</h2>
                    </AccordionTrigger>
                    <AccordionContent className='pt-0 mt-0'>
                        <ScrollArea className="h-[100%] w-full pt-4">
                            <div className="space-y-4">
                                {Array.from({ length: 13 }).map((_, index) => {
                                    return (
                                        <div key={index} onClick={() => setValue(index)} className={`cursor-pointer relative ${index == value ? 'bg-muted-foreground/5':"hover:bg-muted-foreground/5"} p-4 rounded-2xl`}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-24 h-16 rounded-xl bg-muted-foreground/15 flex items-center justify-center">
                                                    <CircularProgress color='text-[#01a0fe]' value={index + 20} size={26} strokeWidth={4} />
                                                </div>
                                                <div className="">
                                                    <h3 className='text-lg font-semibold'>Algoritimo {index + 1}</h3>
                                                    <p className='text-xs'>2:40</p>
                                                </div>
                                            </div>
                                            {index === value && <div className="absolute right-4 top-0 h-full flex items-center justify-center">
                                                <Button variant={"outline"} className='h-10 w-10 flex items-center justify-center cursor-pointer rounded-full'>
                                                    <RiPauseFill />
                                                </Button>
                                            </div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default PlaylistModule