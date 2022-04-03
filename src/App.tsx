import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./styles/customTheme";
import ResumePage from "./pages/resumePage";
import { BrowserRouter } from "react-router-dom";
import Router from "./route/router";


export default function App(): JSX.Element {

  const currentThemeName: string = localStorage.getItem("themeName") || 'defaultTheme';

  return (
    <React.StrictMode>
      <ThemeProvider theme={themes[currentThemeName]}>
        <CssBaseline />       
        <ResumePage />
      </ThemeProvider>
    </React.StrictMode>
  );
}
