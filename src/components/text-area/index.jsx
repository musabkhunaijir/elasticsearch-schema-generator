export const TextArea = ({ customStyle, codeSnippet, handleChange }) => {
  console.log({ handleChange });

  return (
    <textarea
      onChange={handleChange}
      value={codeSnippet}
      className={customStyle}
    >
      {codeSnippet}
    </textarea>
  );
};
