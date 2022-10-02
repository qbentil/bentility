import React from 'react'

interface Props{
    message: string
    color?:string
}
const Hola:React.FC<Props> = ({message, color}) => {
  return (
    <div className={`md:w-[80%] flex justify-start  items-center w-[90%] mt-6 -mb-10 md:my-2`}>
        <div className='md:w-[90%] lg:w-[80%] w-[100%] md:text-5xl text-xl  font-bold'>
            <p className={`md:w-[70%] w-[80%]`}
            style={{
              color: color || ""
            }}
            >{message}</p>
        </div>
    </div>
  )
}

export default Hola