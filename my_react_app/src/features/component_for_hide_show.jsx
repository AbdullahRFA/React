import { useState } from "react";

function ToogleApp() {
  const [isVisible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <h1>{isVisible ? "Abdullah Nazmus-Sakib" : null}</h1>
    </div>
  );
}
export default ToogleApp;
