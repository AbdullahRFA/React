import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


// import MultipleCondition from "./features/multiple_condition";
// import Props from "./features/props_in_rect";
// import './index.css'
// import App from './App.jsx'
// import App from './features/JSX_with_curly_braces.jsx'
// import App from './features/click_event_&_functionCall.jsx'
// import App from './features/state_in_react.jsx'
// import App from "./features/toggle.jsx";
// import StudentName from "./features/props_with_click.jsx";
// import App from "./features/get_input_field_value.jsx";
// import App from "./features/control_component.jsx";
// import App from "./features/handle_check_box.jsx";
import App from "./features/loops_in_react.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
  <App />
  </StrictMode>,
);
