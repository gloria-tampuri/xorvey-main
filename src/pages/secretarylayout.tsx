import { Outlet } from "react-router-dom"
import SecretaryHeader from "../components/SecretaryHeader/SecretaryHeader"

const SecretaryLayout = () => {
  return (
    <div>
        <SecretaryHeader/>
        <Outlet/>
    </div>
  )
}

export default SecretaryLayout