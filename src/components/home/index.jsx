import { SourceCode, GeneratedSchema } from "../index";

export const Container = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <SourceCode />
      </div>

      <div className="basis-1/2">
        <GeneratedSchema />
      </div>
    </div>
  );
};
