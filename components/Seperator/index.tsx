import React from 'react'

interface Props{
    width?:string
}
export const Seperator:React.FC<Props> = ({width}) => {
  return (
    <div className={`my-${width}`}> </div>
  )
}
