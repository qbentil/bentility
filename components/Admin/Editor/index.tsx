import dynamic from "next/dynamic";
import rehypeSanitize from 'rehype-sanitize'
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);



interface Props {
  value: string;
  setValue: (e: any) => void;
  mode?: string;
}

const TextEditor = ({ value, setValue, mode }: Props) => {
  return (
    <div data-color-mode={mode} className="h-full w-full">
      <div className="wmde-markdown-var"> </div>
      <MDEditor
        value={value}
        onChange={(e: any) => setValue(e)}
        className="min-h-[25rem]"
        placeholder="Write your post here..."
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]], // this is the important part to sanitize the html to avoid XSS attacks
        }}
      />
    </div>
  );
};

export default TextEditor;
