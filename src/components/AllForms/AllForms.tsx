import { useContext } from "react";
import BasicInfomationForm from "../BasicInfomationForm/BasicInfomationForm";
import DocumentForm from "../DocumentForm/DocumentForm";
import LandDetails from "../LandDetails/LandDetails";
import PaymentForm from "../PaymentForm/PaymentForm";
import styles from "./AllForms.module.css";
import { FormContext } from '../../context/DynamicFormContext'; // Import the correct context object
import OrganisationalBasic from "../OrganisationalBasic/OrganisationalBasic";
import JointBasicForm from "../JointBasicForm/JointBasicForm";
import OrganisationDocsUploadForm from "../OrganisationDocsUploadForm/OrganisationDocsUploadForm";

const AllForms = () => {
  const formCtx = useContext(FormContext); 

  if (!formCtx) {
    return null;
  }

  const { currentForm } = formCtx;
  console.log(currentForm);
  
  

  return (
    <div className={styles.all}>
      {currentForm === 'basic' && <BasicInfomationForm/>}
      {currentForm === 'document' && <DocumentForm/>}
      {currentForm === 'land' && <LandDetails/>}
      {currentForm === 'payment' && <PaymentForm/>}
      {currentForm ==='organisation basic' && <OrganisationalBasic/>}
      {currentForm === 'joint basic' && <JointBasicForm/>}
      {currentForm === 'organization document' && <OrganisationDocsUploadForm/>}
    </div>
  );
};

export default AllForms;