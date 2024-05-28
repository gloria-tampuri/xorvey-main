import { Outlet } from "react-router-dom"
import ChiefHeader from "../components/ChiefHeader/ChiefHeader"

const Chieflayout = () => {
  return (
    <div>
                <ChiefHeader/>
        <Outlet/>
    </div>
  )
}

export default Chieflayout