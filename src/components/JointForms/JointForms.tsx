import { useContext, useEffect } from "react";
import AllForms from "../AllForms/AllForms";
import { FormContext } from "../../context/DynamicFormContext";

const JointForms = () => {
  localStorage.setItem("type", "Joint");
  const formCtx = useContext(FormContext);

  if (!formCtx) {
    return null;
  }
  const { setCurrentForm } = formCtx;

  useEffect(() => {
    setCurrentForm("joint basic");
  }, [setCurrentForm]);
  return (
    <div>
      <AllForms />
    </div>
  );
};

export default JointForms;
