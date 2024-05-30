

import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader";
import ChiefHeader from "../components/ChiefHeader/ChiefHeader";
import OrganizationForms from "../components/OrganizationForms/OrganizationForms";
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader";

const OrganisationPage = () => {
  
  const role = localStorage.getItem("role")

  return (
    <div>
       {role ==="APPLICANT"?<ApplicantHeader/>:role==="ADMIN"?<ChiefHeader/>:<SecretaryHeader/>}
      <OrganizationForms />
    </div>
  );
};

export default OrganisationPage;