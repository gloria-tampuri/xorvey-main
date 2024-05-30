import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader"
import ChiefHeader from "../components/ChiefHeader/ChiefHeader"
import PaymentForm from "../components/PaymentForm/PaymentForm"
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader"

const PaymentPage = () => {
  const role = localStorage.getItem("role")

  return (
    <div>
       {role ==="APPLICANT"?<ApplicantHeader/>:role==="ADMIN"?<ChiefHeader/>:<SecretaryHeader/>}
        <PaymentForm/>
    </div>
  )
}

export default PaymentPage