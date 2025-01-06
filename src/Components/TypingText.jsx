import React from "react";
import Typical from "react-typical";

const TypingText = ({ stepsArray, loopCount = Infinity }) => {
  const steps = stepsArray.flatMap((step) => [step, 3000]);

  return (
      <Typical steps={steps} loop={loopCount} wrapper="span" />
  );
};

export default TypingText;
