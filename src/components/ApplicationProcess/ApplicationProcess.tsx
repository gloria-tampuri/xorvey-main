import { Four, One, Three, Two } from "../SVGs/Numbers"
import styles from "./ApplicationProcess.module.css"
import cert from "/src/assets/Images/ALLOCATION CERTIFICATION.png"

const ApplicationProcess = () => {
  return (
    <div className={styles.processdiv}>
        <img src={cert} alt="certifcation text"/>
       <div className={styles.topic}>
       <h1>Application </h1>
        <h1 className={styles.h2}>Process</h1>
       </div>
       <div className={styles.processes}>
        <div className={styles.process}>
            <div className={styles.number}><One/></div>
            <div className={styles.others}>
                <p className={styles.name}>Applicant Registration</p>
                <p>Users create an account, providing personal details, and receive a unique ID upon successful registration.</p>
            </div>
        </div>
        <div className={styles.process}>
            <div className={styles.number}><Two/></div>
            <div className={styles.others}>
                <p className={styles.name}>Application Submission </p>
<p>Applicants fill out the form, providing personal and land details, upload necessary documents, and submit with fee payment details.</p>            </div>
        </div>
        <div className={styles.process}>
            <div className={styles.number}><Three/></div>
            <div className={styles.others}>
                <p className={styles.name}>Inspections Stage</p>
                <p>Assigned officers review applications, conduct site visits if needed, write reports, and recommend approval or denial.</p>
            </div>
        </div>
        <div className={styles.process}>
            <div className={styles.number}><Four/></div>
            <div className={styles.others}>
                <p className={styles.name}>Chief's Approval</p>
                <p>The chief reviews applications, reports, and fees, granting final approval for allocation certificates, completing the process.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ApplicationProcess