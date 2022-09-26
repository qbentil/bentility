import React from 'react'
import Select from 'react-select'
import { useStateValue } from '../../context/StateProvider';
import { Category } from '../../types';

const CategorySelector = ({onChange}: {onChange: (e:any)=>void}) => {
  const [{categories}, dispatch] = useStateValue()

  // extract selector options from categories
  const options = categories.map((category: Category) => {
    return {
      value: category._id,
      label: category.title
    }
  })

  return (
    <Select
      isMulti
      name="categories"
      options={options}
      placeholder="Select categories......"
      className={`basic-multi-select `}
      onChange={onChange}
      classNamePrefix="select"
      id='categories-selector'
    />
  )
};

export default CategorySelector