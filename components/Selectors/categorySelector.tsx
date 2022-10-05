import React, {useEffect} from "react";
import Select from "react-select";
import { toast } from "react-toastify";
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

  const handleCategoryChange = (selectedCategories: any) => {
    // accept max of 4 categories
    if (selectedCategories.length > 4) return toast.info("Max 4 categories allowed");
    const options = selectedCategories.map((category: any) => {
      return category.value;
    });
    console.log(options);
    onChange(options);
  }

  return (
    <Select
      isMulti
      name="categories"
      options={options}
      placeholder="Select categories [Max: 4]"
      className={`basic-multi-select `}
      onChange={handleCategoryChange}
      classNamePrefix="select"
      id="categories-selector"
      value={selectedOptions}
      // disable when selected options is 4
      // isDisabled = {selectedOptions?.length === 4}
    />
  );
};

export default CategorySelector;
