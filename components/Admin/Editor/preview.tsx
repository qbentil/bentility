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
interface Props {
  content: string;
  className?: string;
  mode?: string;
}
const Preview = ({ content, className, mode }: Props) => {
  return (
    <div data-color-mode={mode || 'light'} className={className}>
      <Markdown source={content} />
    </div>
  );
};

export default Preview;
