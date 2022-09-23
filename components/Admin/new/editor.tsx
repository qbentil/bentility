
import React from 'react'

function CustomEditor({val, setVal}: {val:string, setVal:(e:any) => void}) {
  return (
    <textarea name="body" id="body" cols={30} rows={10} className='block p-2 px-4 w-full text-gray-900 bg-gray-50 rounded-lg outline-none' value={val} onChange ={setVal} ></textarea>
  )
}

export default CustomEditor