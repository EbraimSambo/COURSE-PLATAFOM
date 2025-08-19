import { Button } from '@/features/globals/ui/components/button'
import { RiNotification2Line } from '@remixicon/react'
import React from 'react'

const NotificationButton = () => {
  return (
    <Button className='w-11 h-11 cursor-pointer' variant={"outline"} >
        <RiNotification2Line />
    </Button>
  )
}

export default NotificationButton