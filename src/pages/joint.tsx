import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader"
import ChiefHeader from "../components/ChiefHeader/ChiefHeader"
import JointForms from "../components/JointForms/JointForms"
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader"

const JointPage = () => {
  
  const role = localStorage.getItem("role")

  return (
    <div>
       {role ==="APPLICANT"?<ApplicantHeader/>:role==="ADMIN"?<ChiefHeader/>:<SecretaryHeader/>}
                <JointForms/>

        </div>
  )
}

export default JointPage