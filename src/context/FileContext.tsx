// FileContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FileContextType {
  indenture: File | null;
  setIndenture: React.Dispatch<React.SetStateAction<File | null>>;
  formerAllocation: File | null;
  setFormerAllocation: React.Dispatch<React.SetStateAction<File | null>>;
  photographicID: File | null;
  setPhotographicID: React.Dispatch<React.SetStateAction<File | null>>;
  sitePlan: File | null;
  setSitePlan: React.Dispatch<React.SetStateAction<File | null>>;
  passportPhoto: File | null;
  setPassportPhoto: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [indenture, setIndenture] = useState<File | null>(null);
  const [formerAllocation, setFormerAllocation] = useState<File | null>(null);
  const [photographicID, setPhotographicID] = useState<File | null>(null);
  const [sitePlan, setSitePlan] = useState<File | null>(null);
  const [passportPhoto, setPassportPhoto] = useState<File | null>(null);

  return (
    <FileContext.Provider
      value={{
        indenture,
        setIndenture,
        formerAllocation,
        setFormerAllocation,
        photographicID,
        setPhotographicID,
        sitePlan,
        setSitePlan,
        passportPhoto,
        setPassportPhoto,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFileContext must be used within a FileProvider');
  }
  return context;
};
