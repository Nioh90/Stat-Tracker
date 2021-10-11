import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [gameName, setGameName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState([]);
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [specificData, setSpecificData] = useState("");

  return (
    <AppContext.Provider
      value={{
        gameName,
        setGameName,
        searchTerm,
        setSearchTerm,
        stats,
        setStats,
        name,
        setName,
        platform,
        setPlatform,
        specificData,
        setSpecificData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
