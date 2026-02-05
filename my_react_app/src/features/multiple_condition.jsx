import { useState } from "react";

function MultipleCondition() {
  const [count, setCount] = useState(0);
  const changeValue = () => {
    setCount(count + 1  );
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changeValue}>Change Contidion</button>
      <h1>{count == 0
        ? "Conditon 0"
        : count == 1
          ? "Condition 1"
          : count == 2
            ? "Condition 2"
            : count == 3
              ? "Condition 3"
              : count == 4
                ? "Condition 4"
                : count == 5
                  ? "Condition 5"
                  : count == 6
                    ? "Condition 6"
                    : "Other Condition"}</h1>
    </div>
  );
}

export default MultipleCondition;
