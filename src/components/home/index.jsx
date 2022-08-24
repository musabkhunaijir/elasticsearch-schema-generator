import { SourceCode, GeneratedSchema } from "../index";

export const Container = () => {
  return (
    <div className="flex m-3">
      <div className="basis-1/2 ">
        <SourceCode />
      </div>

      <div className="basis-1/2 ">
        <GeneratedSchema />
      </div>
    </div>
  );
};
