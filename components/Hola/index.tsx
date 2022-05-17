import React from 'react'

interface Props{
    message: string
}
const Hola:React.FC<Props> = ({message}) => {
  return (
    <div className={`md:w-[80%] flex justify-start  items-center w-[90%]`}>
        <div className='md:w-[90%] lg:w-[80%] w-[100%] md:text-5xl  font-bold'>
            <p className={`md:w-[70%] w-[80%]`}>{message}</p>
        </div>
    </div>
  )
}

export default Hola