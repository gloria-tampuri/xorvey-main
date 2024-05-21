import { useContext } from 'react'
import Modal from '../Modal/Modal'
import styles from './AddProofModal.module.css'
import { AddProofModalContext } from '../../context/AddProofContext'
const AddProofModal = () => {
   const {hideAddProofModal}= useContext(AddProofModalContext)!
  return (
    <Modal>
    <div className={styles.approve}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF"/>
<rect x="4" y="4" width="48" height="48" rx="24" stroke="#ECFDF3" stroke-width="8"/>
<path d="M38 27.0818V28.0018C37.9988 30.1582 37.3005 32.2565 36.0093 33.9836C34.7182 35.7108 32.9033 36.9743 30.8354 37.5857C28.7674 38.1971 26.5573 38.1237 24.5345 37.3764C22.5117 36.6291 20.7847 35.2479 19.611 33.4389C18.4373 31.6299 17.8798 29.4899 18.0217 27.3381C18.1636 25.1864 18.9972 23.1381 20.3983 21.4989C21.7994 19.8596 23.6928 18.7172 25.7962 18.242C27.8996 17.7667 30.1003 17.9842 32.07 18.8618M38 20.0018L28 30.0118L25 27.0118" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <h3>Upload proof of verification</h3>
      <p>
      Are you sure you want to upload this verification proof? Once uploaded, it will be attached to the application. Please review the proof for accuracy before proceeding.
      </p>
      <div className={styles.buttons}>
          <button onClick={()=>{hideAddProofModal()}}>Cancel</button>
          <button className={styles.approvedb}>Upload</button>
      </div>
    </div>
  </Modal>  )
}

export default AddProofModal