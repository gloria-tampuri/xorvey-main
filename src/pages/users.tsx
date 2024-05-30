import ChiefHeader from "../components/ChiefHeader/ChiefHeader"
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader"
import Users from "../components/Users/Users"

const UsersPage = () => {
  const role = localStorage.getItem("role")

  return (
    <div>
             {role==="ADMIN"?<ChiefHeader/>:<SecretaryHeader/>}

        <Users/>
    </div>
  )
}

export default UsersPage