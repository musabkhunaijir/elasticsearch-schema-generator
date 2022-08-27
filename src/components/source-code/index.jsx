import { TextArea } from "../text-area/";

export const SourceCode = ({ handleChange }) => {
  return (
    <>
      <span>Source code:</span>

      <TextArea
        customStyle="w-full rounded-lg bg-gray-200"
        handleChange={handleChange}
      />
    </>
  );
};
