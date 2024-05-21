import { useContext, useEffect } from "react";
import { FormContext } from "../../context/DynamicFormContext";
import AllForms from "../AllForms/AllForms"

const OrganizationForms = () => {
    localStorage.setItem('type', 'Organization')
    const formCtx = useContext(FormContext); 
    if (!formCtx) {
      return null;
    }
  const{setCurrentForm}=formCtx

  useEffect(() => {
    setCurrentForm("organisation basic");
}, [setCurrentForm]);

  return (
    <div><AllForms/></div>
  )
}

export default OrganizationForms