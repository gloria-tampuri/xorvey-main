// import { useEffect, useState } from "react";
// import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader"
// import OrganizationForms from "../components/OrganizationForms/OrganizationForms"

// const OrganisationPage = () => {
//   const [refreshed, setRefreshed] = useState(false);

//   useEffect(() => {
//     if (!refreshed) {
//       window.location.reload(); 
//       setRefreshed(true);
//       console.log('refered!!!!!!!!!!!!');
      
//     }
//   }, [refreshed]);  
//   return (
//     <div>
//                 <ApplicantHeader/>
//               <OrganizationForms/>
//         </div>
//   )
// }

// export default OrganisationPage


import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader";
import OrganizationForms from "../components/OrganizationForms/OrganizationForms";

const OrganisationPage = () => {
  

  return (
    <div>
      <ApplicantHeader />
      <OrganizationForms />
    </div>
  );
};

export default OrganisationPage;