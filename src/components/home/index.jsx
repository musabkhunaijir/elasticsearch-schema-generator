import { useState } from "react";

import { SourceCode, GeneratedSchema } from "../index";

export const Container = () => {
  const [sourceText, setSourceText] = useState("");

  const getSourceCode = () => {
    alert(sourceText);
    console.log(sourceText);
  };

  return (
    <div>
      {/* text */}
      <div className="flex flex-row">
        <div className="basis-1/2">
          <SourceCode handleChange={(e) => setSourceText(e.target.value)} />
        </div>

        <div className="basis-1/2">
          <GeneratedSchema incomingCode={sourceText} />
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center">
        <button
          className="bg-blue-400 rounded-md h-17 w-20 text-center"
          onClick={() => getSourceCode()}
        >
          convert
        </button>
      </div>
    </div>
  );
};
