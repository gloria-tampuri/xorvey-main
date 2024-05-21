import React, { createContext, ReactNode, useState } from 'react';

type ComponentType = 'welcome' | 'type' | 'forms' ;

interface ComponentContextType {
    currentComponent: ComponentType;
    setCurrentComponent: React.Dispatch<React.SetStateAction<ComponentType>>;
  }

  const ComponentTypeContext = createContext<ComponentContextType | null>(null);


const ComponentTypeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState<ComponentType>('welcome');

  return (
    <ComponentTypeContext.Provider value={{ currentComponent, setCurrentComponent }}>
      {children}
    </ComponentTypeContext.Provider>
  );
};

export{ComponentTypeContextProvider,ComponentTypeContext}