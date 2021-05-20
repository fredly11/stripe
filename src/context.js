import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarIsOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuIsOpen] = useState(true);

  const openSidebar = () => {
    setSidebarIsOpen(true);
  };

  const closeSidebar = () => {
    setSidebarIsOpen(false);
  };

  const openSubmenu = () => {
    setSubmenuIsOpen(true);
  };

  const closeSubmenu = () => {
    setSubmenuIsOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
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
