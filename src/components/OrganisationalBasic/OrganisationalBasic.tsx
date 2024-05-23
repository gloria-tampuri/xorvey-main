import { useContext, useState } from 'react';
import styles from './OrganisationalBasic.module.css'
import { FormContext } from '../../context/DynamicFormContext';
import { ComponentTypeContext } from '../../context/DynamicHomeComponents';
import BasicProgressBar from '../BasicProgressBar/BasicProgressBar';
import { useFileContext } from '../../context/FileContext';

const OrganisationalBasic = () => {
  const formCtx = useContext(FormContext);
  if (!formCtx) {
    return null;
  }

  const { setCurrentForm } = formCtx;
  const [organisationName, setOrganisationName] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [placeOfResidence, setPlaceOfResidence] = useState("");

  const componentCtx = useContext(ComponentTypeContext);
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const selectedFile = e.target.files?.[0] || null; // Handle undefined case
    setFile(selectedFile);
    const pTag = e.target.previousElementSibling as HTMLElement;
    if (pTag && pTag.tagName.toLowerCase() === "p") {
      pTag.textContent = selectedFile ? selectedFile.name : "No file chosen";
    }
  };
  if (!componentCtx) {
    return null;
  }
  const { setCurrentComponent } = componentCtx;

  const handleToDocs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    // Email validation
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Phone number validation
    if (!phoneRegex.test(contactNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    // Check if any field is empty
    if (
      !organisationName ||
      !mailingAddress ||
      !email ||
      !contactNumber ||
      !placeOfResidence
    ) {
      alert("Please fill out all the required fields");
      return;
    }

    const basicInfo ={
      "organisationName":organisationName,
      "mailingAddress":mailingAddress,
      "emailAddress":email,
      "contactNumber":contactNumber,
      "location":placeOfResidence
    }

    localStorage.setItem('basicInfo', JSON.stringify(basicInfo));    

    setCurrentForm("organization document");
    
  };

  const{setLogo}=useFileContext()

  const type = localStorage.getItem("type");
  return (
    <div className={styles.main}>
    <div className={styles.breadScrum}>
      <svg
        onClick={() => {
          setCurrentComponent("welcome");
        }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.66667 13.1663H12.3333M8.18141 1.30297L2.52949 5.6989C2.15168 5.99276 1.96278 6.13968 1.82669 6.32368C1.70614 6.48667 1.61633 6.67029 1.56169 6.86551C1.5 7.0859 1.5 7.32521 1.5 7.80384V13.833C1.5 14.7664 1.5 15.2331 1.68166 15.5896C1.84144 15.9032 2.09641 16.1582 2.41002 16.318C2.76654 16.4996 3.23325 16.4996 4.16667 16.4996H13.8333C14.7668 16.4996 15.2335 16.4996 15.59 16.318C15.9036 16.1582 16.1586 15.9032 16.3183 15.5896C16.5 15.2331 16.5 14.7664 16.5 13.833V7.80384C16.5 7.32521 16.5 7.0859 16.4383 6.86551C16.3837 6.67029 16.2939 6.48667 16.1733 6.32368C16.0372 6.13968 15.8483 5.99276 15.4705 5.69891L9.81859 1.30297C9.52582 1.07526 9.37943 0.9614 9.21779 0.917634C9.07516 0.879018 8.92484 0.879018 8.78221 0.917634C8.62057 0.9614 8.47418 1.07526 8.18141 1.30297Z"
          stroke="#667085"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="#D0D5DD"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p
        onClick={() => {
          setCurrentComponent("type");
        }}
      >
        {type}
      </p>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="#D0D5DD"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className={styles.active}>Basic information</p>
    </div>
    <div className={styles.progress}>
      <BasicProgressBar/>
    </div>
    <div className={styles.all}>
      <div className={styles.basicForm}>
        <div className={styles.head}>
          <h3>Basic Information</h3>
          <p>Please enter the basic information about the organization</p>
        </div>
        <div className={styles.form}>
          <form>
            <div className={styles.left}>
              <div className={styles.section}>
                <label>Name of organization*</label>
                <input
                  type="text"
                  placeholder="Enter name of organization"
                  required
                  value={organisationName}
                  onChange={(e) => setOrganisationName(e.target.value)}
                />
              </div>
              <div className={styles.section}>
                <label>Mailing address*</label>
                <input
                  type="text"
                  placeholder="Enter organizational mailing address"
                  required
                  value={mailingAddress}
                  onChange={(e) => setMailingAddress(e.target.value)}
                />
              </div>
              <div className={styles.section}>
                <label>Email address*</label>
                <input
                  type="email"
                  placeholder="Enter organization email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
             
            </div>
            <div className={styles.right}>
            <div className={styles.section}>
                <label>Location*</label>
                <input
                  type="text"
                  placeholder="Enter organization location"
                  value={placeOfResidence}
                  onChange={(e) => setPlaceOfResidence(e.target.value)}
                />
              </div>
              <div className={styles.section}>
                <label>Contact Number*</label>
                <input
                  type="tel"
                  placeholder="Enter contact number here"
                  required
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              
              <div className={styles.section}>
                  <label htmlFor="logo">Upload organization Logo*</label>
                 
                     <div className={styles.example}>
                    <p>No file chosen</p>

                    <input
                      className={styles.inputs}
                      type="file"
                    id="logo"
                    onChange={(e) => handleFileChange(e, setLogo)}
                    />
                    <label htmlFor="logo">Upload</label>
                  </div>
                </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.buttons}>
        <p onClick={handleToDocs}>Save & continue</p>
      </div>
    </div>
  </div>  )
}

export default OrganisationalBasic