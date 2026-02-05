import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MultipleCondition from "./multiple_condition";
// import './index.css'
// import App from './App.jsx'
// import App from './JSX_with_curly_braces.jsx'
// import App from './click_event_&_functionCall.jsx'
// import App from './state_in_react.jsx'
// import App from "./toggle.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <MultipleCondition />
  </StrictMode>,
);
