import { TextArea } from "../text-area/";

export const GeneratedSchema = ({ incomingCode }) => {
  return (
    <>
      <span>Result:</span>

      <TextArea
        codeSnippet={incomingCode}
        customStyle="w-full rounded-lg bg-gray-400"
      />
    </>
  );
};
