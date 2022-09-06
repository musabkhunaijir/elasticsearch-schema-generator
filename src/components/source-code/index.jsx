import { useState } from "react";
import { TextArea } from "../text-area/";
import { SelectType } from "./select";

export const SourceCode = ({ handleChange }) => {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("");

  const addFieldType = () => {
    alert(fieldName + " of type " + fieldType);
  };

  const handelFieldType = (selectedType) => {
    setFieldType(selectedType);
  };

  return (
    <div className=" bg-yellow-800 space-y-3">
      <div>Source code</div>

      {/* input types */}
      <div className="flex flex-row border-2 rounded-lg border-green-400 ">
        <div className="basis-1/2">
          <div>name:</div>
          <input
            type="text"
            name="fieldName"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
          />
        </div>

        <div className="basis-1/2">
          <SelectType handelFieldType={handelFieldType} />
        </div>
      </div>

      <div>
        <button
          className="bg-gray-400 w-16 h-7 rounded-full ml-[240px]"
          onClick={addFieldType}
        >
          Add
        </button>
      </div>

      {/* source text */}
      <TextArea
        customStyle="w-full rounded-lg bg-gray-200 p-4"
        handleChange={handleChange}
      />
    </div>
  );
};
