import React from 'react'
import { Button } from '../../types'

const Button = ({text, icon, onClick} : Button) => {
  return (
    <div
          className={`flex gap-3 justify-center items-center cursor-pointer bg-primary text-white hover:bg-active-bg hover:text-active py-2 px-5 w-full rounded-full transition-all duration-75 ease-in-out`}
          onClick={onClick}
            >
              {icon}
              <p>{text}</p>
            </div>
  )
}

export default Button