import React from 'react'

interface Props{
    message: string
}
const Hola:React.FC<Props> = ({message}) => {
  return (
    <div className={`md:w-[80%] flex justify-center  items-center w-[90%]`}>
        <div className='md:w-[75%] w-[100%] md:text-4xl font-bold'>
            {message}
        </div>
    </div>
  )
}

export default Hola