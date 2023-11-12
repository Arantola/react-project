import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { ApiResponse } from '../services/apiTypes';

interface AppContextInterface {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  data: ApiResponse | null;
  setData: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );

  const contextValues = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      data,
      searchValue,
      setSearchValue,
      setData,
    }),
    [isLoading, setIsLoading, data, searchValue, setSearchValue, setData]
  );

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}
