import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { Category } from "../../types";
import { ColorOpacity } from "../../util/functions";

const CategoriesBadge = ({ ids }: { ids: string[] }) => {
  const [{ categories }, dispatch] = useStateValue();
  return (
    categories &&
    categories
      .filter((category: Category) => ids.includes(category?._id || ""))
      .map((category: Category) => (
        <div
          style={{
            backgroundColor: ColorOpacity(category.color || "", 20),
          }}
          className=" py-1 px-5 rounded-md"
          key={category._id}
        >
          <p
            style={{
              color: category.color,
            }}
            className="text-xs truncate"
          >
            {category.title}
          </p>
        </div>
      ))
  );
};

export default CategoriesBadge;
