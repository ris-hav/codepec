import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [html, setHtml] = useLocalStorage("html","");
  const [js, setJs] = useLocalStorage("css","");
  const [css, setCss] = useLocalStorage("js","");
  const [copy, setCopy] = useState(false);
  const [view, setView] = useState(false);

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
        copy,
        setCopy,
        view,
        setView
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
