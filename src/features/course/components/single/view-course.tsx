import React from 'react'
import PayerVideo from '../player/payer-video'

const ViewCourse = ({ REF }: { REF: string }) => {
    return (
        <div className='grid grid-cols-3'>
            <div className="col-span-2">
                 <PayerVideo />
            </div>
           
        </div>
    )
}

export default ViewCourse