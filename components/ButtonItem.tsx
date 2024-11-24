import React from 'react'
import { Button } from './ui/button'

function ButtonItem({text, isActive}: {text: string, isActive: boolean}) {
  return (
    <Button className={`h-fit w-fit rounded-full p-2 pl-3 pr-5 ${
        isActive === true ? `bg-black text-white` : `bg-gray-300 text-black`
      }`}> 
        <div className='bg-white p-2 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="black" 
        viewBox="0 0 16 16">
        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
        </svg>
        </div>
        {text} 
    </Button>
  )
}

export default ButtonItem