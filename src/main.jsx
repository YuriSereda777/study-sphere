import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "976px",
  xl: "1440px",
};

const theme = extendTheme({ breakpoints });

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
