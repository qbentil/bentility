import React from 'react'
import Select from 'react-select'
import { categories } from '../../../util/data';


// extract title and _id from categories as options
const options = categories.map(category => ({
    value: category._id,
    label: category.name
}))


const CategorySelector = ({onChange}: {onChange: (e:any)=>void}) => (
  <Select
    isMulti
    name="categories"
    options={options}
    placeholder="Select categories......"
    className={`basic-multi-select`}
    onChange={onChange}
    classNamePrefix="select"
  />
);

export default CategorySelector