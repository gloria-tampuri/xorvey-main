import React, { createContext, ReactNode, useEffect, useState } from "react";

type FormType =
  | "basic"
  | "document"
  | "land"
  | "payment"
  | "organisation basic"
  | "joint basic"
  | "organization document";

interface FormContextType {
  currentForm: FormType;
  setCurrentForm: React.Dispatch<React.SetStateAction<FormType>>;
}

const FormContext = createContext<FormContextType | null>(null);

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentForm, setCurrentForm] = useState<FormType>("basic");
  useEffect(() => {
    const type = localStorage.getItem("type");
    if (type === "Individual") {
      setCurrentForm("basic");
    } else if (type === "Organization") {
      setCurrentForm("organisation basic");
    } else if (type === "Joint") {
      setCurrentForm("joint basic");
    }
  }, []);
  return (
    <FormContext.Provider value={{ currentForm, setCurrentForm }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
