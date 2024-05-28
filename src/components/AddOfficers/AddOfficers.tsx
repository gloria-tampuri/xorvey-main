import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./AddOfficers.module.css";
import { AddOfficerContext } from "../../context/AddOfficerContext";

const AddOfficers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Secretary");

const userCtx= useContext(AddOfficerContext)!
 const {addOfficer,hideAddOfficer } = userCtx
  return (
    <Modal>
      <div className={styles.svg}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
          <rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="24"
            stroke="#ECFDF3"
            stroke-width="8"
          />
          <path
            d="M36 37V35C36 33.9391 35.5786 32.9217 34.8284 32.1716C34.0783 31.4214 33.0609 31 32 31H24C22.9391 31 21.9217 31.4214 21.1716 32.1716C20.4214 32.9217 20 33.9391 20 35V37M32 23C32 25.2091 30.2091 27 28 27C25.7909 27 24 25.2091 24 23C24 20.7909 25.7909 19 28 19C30.2091 19 32 20.7909 32 23Z"
            stroke="#039855"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h4>Add officers</h4>
      <form className={styles.forms}>
        <div className={styles.section}>
          <label>Full name*</label>
          <input
            type="text"
            placeholder="Enter name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <label>Email*</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <label>Phone*</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <label>Role*</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Secretary">Secretary</option>
            <option value="Inspectore">Inspector</option>
          </select>
        </div>
        
        <div className={styles.buttons}>
            <button className={styles.cancel} onClick={hideAddOfficer}>Cancel</button>
            <button className={styles.submit}>Invite</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddOfficers;
