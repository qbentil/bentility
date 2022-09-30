import Image from "next/image";

export const Empty = ({text}) => {
  return (
    <div className="flex flex-col min-h-[50vh]  text-active items-center justify-center bg-transparent font-text mt-6 px-[2em] py-[1em] rounded-lg">
        <Image src="/images/no-data.svg" width={200} height={200} alt="empty" />
        <p className="text-base font-bold mt-5">{text}</p>
    </div>
  );
};
export const Fetching = ({text}) => {
  return (
    <div className="flex flex-col min-h-[50vh] text-active items-center justify-center bg-transparent font-text mt-6 px-[2em] py-[1em] rounded-lg">
        <Image src="/images/no-data.svg" width={200} height={200} alt="empty" />
        <p className="text-base font-bold mt-5">{text}</p>
    </div>
  );
};
