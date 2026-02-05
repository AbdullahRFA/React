import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MultipleCondition from "./features/multiple_condition";
// import './index.css'
// import App from './features/App.jsx'
// import App from './features/JSX_with_curly_braces.jsx'
// import App from './features/click_event_&_functionCall.jsx'
// import App from './features/state_in_react.jsx'
// import App from "./features/toggle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <MultipleCondition />
  </StrictMode>,
);
