import { useContext } from "react"
import ApplicationType from "../ApplicationType/ApplicationType"
import Welcome from "../Welcome/Welcome"
import styles from "./ApplicantHome.module.css"
import { ComponentTypeContext } from "../../context/DynamicHomeComponents"
import Ticket from "../Ticket/Ticket"

const ApplicantHome = () => {

 const componentCtx= useContext(ComponentTypeContext)
 
 if (!componentCtx) {
  return null;
}
 const { currentComponent } = componentCtx;

  return (
    <div className={styles.all}>
     {currentComponent==='welcome' && <Welcome/>}
      {currentComponent==='type' &&<ApplicationType/>}
      {/* {currentComponent==='forms' &&<AllForms/>} */}
      <Ticket/>
    </div>
  )
}

export default ApplicantHome