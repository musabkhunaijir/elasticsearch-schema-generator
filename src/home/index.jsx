import { TextArea } from "../text-area/";

export const Container = () => {
  return (
    <div className="flex">
      {/* source code */}
      <div className="basis-1/2 bg-red-400">
        <TextArea codeSnippet="left" />
      </div>

      {/* elasticsearch auto generated result */}
      <div className="basis-1/2 bg-green-400">
        <TextArea codeSnippet="right" />
      </div>
    </div>
  );
};
