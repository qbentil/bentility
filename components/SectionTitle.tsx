import React from "react";

interface Props {
    title?: string,
    tp?:string
}

const SectionTitle:React.FC<Props> = ({title, tp = 'start'}) => {
  return (
    <div className={`my-2 w-full bg-transparent py-2 flex items-center justify-${tp}`}>
      <p className="text-2xl md:text-3xl font-semibold text-gray-500">{title}</p>
    </div>
  );
};

export default SectionTitle;
