import ChiefHeader from "../components/ChiefHeader/ChiefHeader"
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader"

const TicketsPage = () => {
  const role = localStorage.getItem("role")

  return (
    <div>
             {role==="ADMIN"?<ChiefHeader/>:<SecretaryHeader/>}

    </div>
  )
}

export default TicketsPage