
import React from 'react'

function CustomEditor({val, setVal}: {val:string, setVal:(e:any) => void}) {
  return (

    <textarea name="body" id="body" cols={30} rows={12} className='block p-2 px-4 w-full border border-gray-300 text-gray-900 rounded-lg outline-none resize-none' value={val} onChange ={setVal} ></textarea>
  )
}

export default CustomEditor