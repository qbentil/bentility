import React from 'react'
import Select from 'react-select'
import { categories } from '../../../util/data';


// extract title and _id from categories as options
const options = categories.map(category => ({
    value: category._id,
    label: category.name
}))


const CategorySelector = ({className}: {className?:string}) => (
  <Select
    isMulti
    name="categories"
    options={options}
    placeholder="Select categories......"
    className={`basic-multi-select`}
    classNamePrefix="select"
  />
);

export default CategorySelector