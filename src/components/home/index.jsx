import { SourceCode, GeneratedSchema } from "../index";

export const Container = () => {
  return (
    <div>
      {/* text */}
      <div className="flex flex-row">
        <div className="basis-1/2">
          <SourceCode />
        </div>

        <div className="basis-1/2">
          <GeneratedSchema />
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center">
        <button
          className="bg-blue-400 rounded-md h-17 w-20 text-center"
          onClick={() => alert("clicked!")}
        >
          convert
        </button>
      </div>
    </div>
  );
};
