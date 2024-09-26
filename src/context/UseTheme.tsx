import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Initialize context with undefined
const Theme = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode; // Type for the children prop
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      {children}
    </Theme.Provider>
  );
};

export { ThemeProvider, Theme };


import { useContext } from "react";

export const UseTheme = (): ThemeContextType => {
  const context = useContext(Theme);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
