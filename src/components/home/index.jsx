import { useState } from "react";

import { SourceCode, GeneratedSchema } from "../index";

export const Container = () => {
  const [sourceText, setSourceText] = useState("");
  const [generatedSchema, setGeneratedSchema] = useState("");

  const setSourceCode = () => {
    setGeneratedSchema(`${sourceText} + some code`);
  };

  return (
    <div>
      {/* text */}
      <div className="flex flex-col md:flex-row space-x-5">
        <div className="basis-1/2">
          <SourceCode handleChange={(e) => setSourceText(e.target.value)} />
        </div>

        <div className="basis-1/2">
          <GeneratedSchema generatedSchema={generatedSchema} />
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center">
        <button
          className="bg-blue-400 rounded-md h-17 w-20 text-center"
          onClick={() => setSourceCode()}
        >
          convert
        </button>
      </div>
    </div>
  );
};
