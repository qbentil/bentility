import dynamic from "next/dynamic";
import { useState } from "react";

const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);

const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);
const Preview = ({ value }: { value: string }) => {
  return (
    <div className="h-full w-full absolute z-10 top-0 left-0 bg-white">
      <Markdown source={value} />
    </div>
  );
};

export default Preview;
