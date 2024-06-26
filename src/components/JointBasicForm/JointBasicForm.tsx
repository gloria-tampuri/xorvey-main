import styles from './JointBasicForm.module.css'
import { useContext, useState } from "react";
import { ComponentTypeContext } from "../../context/DynamicHomeComponents";
import BasicProgressBar from "../BasicProgressBar/BasicProgressBar";
import { FormContext } from "../../context/DynamicFormContext";
import { IoMdAddCircleOutline } from "react-icons/io";

const JointBasicForm = () => {
  const formCtx = useContext(FormContext);
  const componentCtx = useContext(ComponentTypeContext);

  if (!formCtx || !componentCtx) {
    return null;
  }

  const { setCurrentForm } = formCtx;
  const { setCurrentComponent } = componentCtx;

  const [persons, setPersons] = useState([{ // Initialize with one person form
    applicantName: "",
    mailingAddress: "",
    email: "",
    hometown: "",
    nextOfKin: "",
    dateOfBirth: "",
    contactNumber: "",
    placeOfResidence: "",
    maritalStatus: ""
  }]);

  const handleAddPerson = () => {
    setPersons([...persons, { // Add a new person form
      applicantName: "",
      mailingAddress: "",
      email: "",
      hometown: "",
      nextOfKin: "",
      dateOfBirth: "",
      contactNumber: "",
      placeOfResidence: "",
      maritalStatus: ""
    }]);
  };



  const savePersonsDataToLocalStorage = () => {
    const personsData = persons.map(person => ({
      applicantName: person.applicantName,
      mailingAddress: person.mailingAddress,
      email: person.email,
      hometown: person.hometown,
      nextOfKin: person.nextOfKin,
      applicantDOB:person.dateOfBirth && `${person.dateOfBirth}T00:00:00Z`,
      contactNumber: person.contactNumber,
      placeOfResidence: person.placeOfResidence,
      maritalStatus: person.maritalStatus
    }));
    const basicInfo = {
      'applicants':personsData
    }
      localStorage.setItem("basicInfo", JSON.stringify(basicInfo));
  };



  const type = localStorage.getItem("type");
  
  const handleToDocs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
  
    // Loop through each person's data
    for (const person of persons) {
      // Email validation
      if (!emailRegex.test(person.email)) {
        alert("Please enter a valid email address");
        return;
      }
  
      // Phone number validation
      if (!phoneRegex.test(person.contactNumber)) {
        alert("Please enter a valid phone number");
        return;
      }
  
      // Check if any field is empty
      for (const field of Object.values(person)) {
        if (!field) {
          alert("Please fill out all the required fields");
          return;
        }
      }
    }
  
    // If all validations pass, save data to local storage
    setCurrentForm('organization document');
    savePersonsDataToLocalStorage();
  };
  
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
              <p>Please enter the basic information about yourself</p>
            </div>
            {persons.map((person, index) => (
            <div className={styles.form}  key={index}>
              <p className={styles.person}>Person {index + 1}</p>
              <form>
                <div className={styles.left}>
                  <div className={styles.section}>
                    <label>Name of applicant*</label>
                    <input
                      type="text"
                      placeholder="Enter your full name here"
                      required
                      value={person.applicantName}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].applicantName = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                  <div className={styles.section}>
                    <label>Mailing address*</label>
                    <input
                      type="text"
                      placeholder="Enter your mailing address here"
                      required
                      value={person.mailingAddress}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].mailingAddress = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                  <div className={styles.section}>
                    <label>Email address*</label>
                    <input
                      type="email"
                      placeholder="Enter your email address here"
                      required
                      value={person.email}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].email = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                  <div className={styles.section}>
                    <label>Hometown</label>
                    <input
                      type="text"
                      placeholder="Enter your hometown here"
                      value={person.hometown}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].hometown = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                  <div className={styles.section}>
                    <label>Next of Kin*</label>
                    <input
                      type="text"
                      placeholder="Enter name of next of kin"
                      required
                      value={person.nextOfKin}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].nextOfKin = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.section}>
                    <label>Date of birth</label>
                    <input
                      type="date"
                      value={person.dateOfBirth}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].dateOfBirth = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                  <div className={styles.section}>
                    <label>Contact Number*</label>
                    <input
                      type="tel"
                      placeholder="Enter contact number"
                      required
                      value={person.contactNumber}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].contactNumber = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                  <div className={styles.section}>
                    <label>Place of residence</label>
                    <input
                      type="text"
                      placeholder="Enter place of residence"
                      value={person.placeOfResidence}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].placeOfResidence = e.target.value;
                        return updatedPersons;
                      })}
                    />
                  </div>
                  <div className={styles.section}>
                    <label>Marital Status</label>
                    <select
                      value={person.maritalStatus}
                      onChange={(e) => setPersons(prevState => {
                        const updatedPersons = [...prevState];
                        updatedPersons[index].maritalStatus = e.target.value;
                        return updatedPersons;
                      })}
                    >
                      <option>Select Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>))}

            <button onClick={handleAddPerson}  className={styles.add} ><IoMdAddCircleOutline/>Add Person</button>

          </div>
        

        <div className={styles.buttons}>
          <button onClick={handleToDocs}>Save & continue</button>
        </div>
      </div>
    </div>
  );
}

export default JointBasicForm;
