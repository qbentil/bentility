import React from 'react'
import Select from 'react-select'

const Usertype = ({onChange}: {onChange: (e:any)=>void}) => {

    const options = [
        { value: 'writer', label: 'Writer' },
        { value: 'admin', label: 'Admin' },
    ];

  return (
    <Select
      name="usertype"
      defaultValue={options[0]}
      options={options}
      placeholder="Select user Type......"
      onChange={onChange}
      classNamePrefix="select"
      id='usertype-selector'
    />
  )
};

export default Usertype