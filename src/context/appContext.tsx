// AppContext.tsx
import { createContext, ReactNode, useMemo } from "react";
import { doctors } from "../assets/assets";
import {  Doctor } from '../types/doctorsTypes';

interface AppContextValue {
  doctors: Doctor[];
  currencySymbol: string;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const currencySymbol =  '$'
  const value = useMemo(() => ({
    doctors,
    currencySymbol
  }), []);

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
