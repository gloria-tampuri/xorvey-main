import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader"
import ApplicantHome from "../components/ApplicantHome/ApplicantHome"
import ChiefHeader from "../components/ChiefHeader/ChiefHeader"
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader"

const ApplicantHomePage = () => {
  const role = localStorage.getItem("role")
  return (
    <div>
       {role ==="APPLICANT"?<ApplicantHeader/>:role==="ADMIN"?<ChiefHeader/>:<SecretaryHeader/>}
        <ApplicantHome/>
    </div>
  )
}

export default ApplicantHomePage