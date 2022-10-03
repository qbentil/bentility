import dynamic from "next/dynamic";

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
      <MDEditor
        value={value}
        onChange={(e: any) => setValue(e)}
        className="min-h-[25rem]"
        placeholder="Write your post here..."
      />
    </div>
  );
};

export default TextEditor;
