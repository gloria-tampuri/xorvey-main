import { Outlet } from "react-router-dom"
import InspectorHeader from "../components/InspectorHeader/InspectorHeader"

const InspectorHomeLayout = () => {
  return (
    <div>
        <InspectorHeader/>
        <Outlet/>
    </div>
  )
}

export default InspectorHomeLayout