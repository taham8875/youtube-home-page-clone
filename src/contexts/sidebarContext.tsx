import { createContext, useContext, useEffect, useState } from "react";

type SidebarProviderProps = {
  children: React.ReactNode;
};

type SidebarContextProps = {
  isSidebarOpenInLargeScreen: boolean;
  isSidebarOpenInSmallScreen: boolean;
  toggleSidebarOpen: () => void;
  closeSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpenInLargeScreen, setIsSidebarOpenInLargeScreen] =
    useState(true);
  const [isSidebarOpenInSmallScreen, setIsSidebarOpenInSmallScreen] =
    useState(false);

  useEffect(() => {
    const handler = () => {
      if (isScreenLarge()) {
        setIsSidebarOpenInSmallScreen(false);
      } else {
        setIsSidebarOpenInLargeScreen(false);
      }
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  const isScreenLarge = () => {
    return window.matchMedia("(min-width: 1024px)").matches;
  };

  const toggleSidebarOpen = () => {
    if (isScreenLarge()) {
      setIsSidebarOpenInLargeScreen(
        (isSidebarOpenInLargeScreen) => !isSidebarOpenInLargeScreen
      );
    } else {
      setIsSidebarOpenInSmallScreen(
        (isSidebarOpenInSmallScreen) => !isSidebarOpenInSmallScreen
      );
    }
  };

  const closeSidebar = () => {
    if (isScreenLarge()) {
      setIsSidebarOpenInLargeScreen(false);
    } else {
      setIsSidebarOpenInSmallScreen(false);
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpenInLargeScreen,
        isSidebarOpenInSmallScreen,
        toggleSidebarOpen,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
