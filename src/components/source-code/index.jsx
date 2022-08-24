import { TextArea } from "../text-area/";

export const SourceCode = () => {
  return (
    <>
      <span>Source code:</span>
      <TextArea
        codeSnippet="left"
        customStyle="w-full rounded-lg bg-gray-200"
      />
    </>
  );
};
