import Login from "./components/login/Login.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BookShop from "./components/bookshop/BookShop.jsx";
import React from "react";
import { useState } from "react";

export const Context = React.createContext();
const theme = createTheme();
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Context.Provider value={[isAuthenticated, setIsAuthenticated]}>
        <ThemeProvider theme={theme}>
          {!isAuthenticated ? <Login /> : <BookShop />}
        </ThemeProvider>
      </Context.Provider>
    </>
  );
}

export default App;
