import { useParams } from "react-router-dom";

const Word = () => {
  const { word, textColor, backgroundColor } = useParams();

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      {word ? (
        <h1>The word is: {word}</h1>
      ) : (
        <h1>The number is: {word}</h1>
      )}
    </div>
  );
};

export default Word;
