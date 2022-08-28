import { useState } from "react";

import { TextArea } from "../text-area/";

export const GeneratedSchema = ({ generatedSchema }) => {
  return (
    <>
      <span>Result:</span>

      <TextArea
        codeSnippet={generatedSchema}
        customStyle="w-full rounded-lg bg-gray-400 p-4"
      />
    </>
  );
};
