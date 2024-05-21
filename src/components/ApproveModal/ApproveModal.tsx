
import { useContext } from "react";
import { ApproveModalContext } from "../../context/ShowApprovedModalContext";
import Modal from "../Modal/Modal";
import styles from './ApproveModal.module.css'
const ApproveModal = () => {
    const { hideApproveModal } = useContext(ApproveModalContext)!
    // const [approved, setApproved] = useState(false);

    // const handleToggle = () => {
    //   setApproved(!approved);
    // };
  return (
    <Modal>
      <div className={styles.approve}>
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF"/>
<rect x="4" y="4" width="48" height="48" rx="24" stroke="#ECFDF3" stroke-width="8"/>
<path d="M38 27.0818V28.0018C37.9988 30.1582 37.3005 32.2565 36.0093 33.9836C34.7182 35.7108 32.9033 36.9743 30.8354 37.5857C28.7674 38.1971 26.5573 38.1237 24.5345 37.3764C22.5117 36.6291 20.7847 35.2479 19.611 33.4389C18.4373 31.6299 17.8798 29.4899 18.0217 27.3381C18.1636 25.1864 18.9972 23.1381 20.3983 21.4989C21.7994 19.8596 23.6928 18.7172 25.7962 18.242C27.8996 17.7667 30.1003 17.9842 32.07 18.8618M38 20.0018L28 30.0118L25 27.0118" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <h3>Approve Application</h3>
        <p>
          Are you sure you want to approve this application. Proceeding will
          advance the application to the next stage. Please review all details
          for accuracy before proceeding.
        </p>
        <div className={styles.buttons}>
            <button onClick={()=>{hideApproveModal()}}>Cancel</button>
            <button className={styles.approvedb}>Approve</button>
        </div>
      </div>
    </Modal>
  );
};

export default ApproveModal;
