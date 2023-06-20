import React from 'react'
import { Toast } from 'react'
import { toast } from 'react-hot-toast'

const EventHandling = () => {

    const myClick = () => {
        toast .success('Nice toast ❤️')
    }
   
  return (
    <div>
        <h1 className='text-center'>Event Handling</h1>
        <hr />

        <h4>Click Event</h4>

        <button className='btn btn-primary' onClick={() => { alert('Click Event')}}>Click Event</button>
        <button className='btn btn-primary' onClick={ myClick }>Aontheer Click Event</button>
    </div>
  )
}

export default EventHandling