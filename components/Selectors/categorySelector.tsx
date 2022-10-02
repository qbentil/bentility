import React, {useEffect} from "react";
import Select from "react-select";
import { useStateValue } from "../../context/StateProvider";
import { Category } from "../../types";

const CategorySelector = ({
  onChange,
  values,
}: {
  onChange: (e: any) => void;
  values?: string[];
}) => {
  const [{ categories }, dispatch] = useStateValue();

  // extract selector options from categories
  const options = categories.map((category: Category) => {
    return {
      value: category._id,
      label: category.title,
    };
  });

  // get selected options from values which is an array of category ids
  const selectedOptions = values?.map((value: string) => {
    return options.filter((option:any) => option.value === value)[0];
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
      id="categories-selector"
      value={selectedOptions}
    />
  );
};

export default CategorySelector;
