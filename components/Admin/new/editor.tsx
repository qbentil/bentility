
import React from 'react'

function CustomEditor({val, setVal}: {val:string, setVal:(e:any) => void}) {
  return (
    <textarea placeholder="Content...." name="body" id="body" cols={30} rows={12} className='block p-2 px-4 w-full border-2 border-gray-300 text-gray-900 rounded-lg outline-none resize-none focus:border-primary' value={val} onChange ={(e) => setVal(e.target.value)}></textarea>
  )
}

export default CustomEditor