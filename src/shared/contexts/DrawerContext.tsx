import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption {
  path: string;
  icon: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOption: IDrawerOption[];
  setDrawerOption : (newDrawerOption: IDrawerOption[])=> void;
}

interface IDrawerProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOption, setDrawerOption] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOption = useCallback((newDrawerOption: IDrawerOption[]) => {
    setDrawerOption(newDrawerOption);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOption, toggleDrawerOpen, setDrawerOption: handleSetDrawerOption }}>
      {children}
    </DrawerContext.Provider>
  );
};