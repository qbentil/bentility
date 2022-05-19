import React from "react";

interface Props {
    title: string
}

const SectionTitle:React.FC<Props> = ({title}) => {
  return (
    <div className="my-2 w-full bg-transparent py-2">
      <p className="text-2xl md:text-3xl font-semibold text-gray-500">{title}</p>
    </div>
  );
};

export default SectionTitle;
