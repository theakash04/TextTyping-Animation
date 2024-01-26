import React from 'react'
import 'boxicons';

function ReAnimate({reAnimate}) {
  return (
    <div className='w-full flex items-center justify-center py-6 gap-10'>
      <button onClick={reAnimate} type='button' className='bg-black px-7 py-3 rounded-md flex items-center justify-center'> 
        Restart
      </button>
    </div>
  )
}

export default ReAnimate
