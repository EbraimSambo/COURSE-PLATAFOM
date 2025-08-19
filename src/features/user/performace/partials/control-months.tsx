"use client"
import { Button } from '@/features/globals/ui/components/button'
import { Calendar } from '@/features/globals/ui/components/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/features/globals/ui/components/popover'
import { CalendarIcon } from 'lucide-react'
import React from 'react'

const ControlMonths = () => {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    return (
        <div className='bg-muted p-4 rounded-3xl'>
            <div className="flex justify-between items-center">
                <h2>Semanas Batidas</h2>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date"
                            className="w-48 justify-between font-normal cursor-pointer"
                        >
                            {date ? date.toLocaleDateString() : "Selecione data"}
                            <CalendarIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                setDate(date)
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default ControlMonths