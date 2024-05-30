import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader";
import ChiefHeader from "../components/ChiefHeader/ChiefHeader";
import IndividualForms from "../components/IndividualForms/IndividualForms";
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader";

const IndividualPage = () => {
 const role = localStorage.getItem("role")
  return (
    <div>
       {role ==="APPLICANT"?<ApplicantHeader/>:role==="ADMIN"?<ChiefHeader/>:<SecretaryHeader/>}
      <IndividualForms/>
    </div>
  );
};

export default IndividualPage;
