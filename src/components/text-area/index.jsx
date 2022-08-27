export const TextArea = ({ customStyle, codeSnippet, handleChange }) => {
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
