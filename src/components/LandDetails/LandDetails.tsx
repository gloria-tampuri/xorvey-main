// import styles from "./LandDetails.module.css";
// import { FormContext } from "../../context/DynamicFormContext";
// import { useContext, useEffect, useState } from "react";
// import { ComponentTypeContext } from "../../context/DynamicHomeComponents";
// import LandProgressBar from "../LandProgressBar/LandProgressBar";
// import axios from "axios";
// import {useNavigate } from "react-router-dom";
// import { useFileContext } from "../../context/FileContext";

// const LandDetails = () => {
//   const formCtx = useContext(FormContext);
//   if (!formCtx) {
//     return null;
//   }

//   const { setCurrentForm } = formCtx;
//   const handleToPreviousForm = () => {
//     setCurrentForm("document");
//   };

//   const {
//     indenture,
//     formerAllocation,
//     photographicID,
//     sitePlan,
//     passportPhoto,
//   } = useFileContext();

//   const componentCtx = useContext(ComponentTypeContext);

//   if (!componentCtx) {
//     return null;
//   }
//   const { setCurrentComponent } = componentCtx;
//   const type = localStorage.getItem("type");

//   const [locality, setLocality] = useState("");
//   const [plotNumber, setPlotNumber] = useState("");
//   const [landSize, setLandSize] = useState("");
//   const [transferDate, setTransferDate] = useState("");
//   const [transferorContact, setTransferorContact] = useState("");
//   const [siteName, setSiteName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [streetName, setStreetName] = useState("");
//   const [purpose, setPurpose] = useState("Residence");

//   const data = {
//     landLocality: locality,
//     siteName: siteName,
//     plotNumbers: plotNumber,
//     totalLandSize: landSize,
//     streetName: streetName,
//     landTransferor: contactNumber,
//     dateOfOriginalTransfer: transferDate ? `${transferDate}T00:00:00Z` : "",
//     purposeOfLand: purpose,
//     contactOfTransferor: transferorContact,
//   };

//   useEffect(() => {
//     const storedBasicInfo = localStorage.getItem("basicInfo");
//     if (storedBasicInfo) {
//       const basicInfo = JSON.parse(storedBasicInfo);
//       // Merge data with basicInfo
//       let updatedBasicInfo;
//       if (localStorage.getItem('type')==="Individual" || localStorage.getItem('type')==="Organization"){
//          updatedBasicInfo = { ...basicInfo, ...data };
//       }else if(localStorage.getItem('type')==="Joint"){
//         updatedBasicInfo = { ...basicInfo, "landDetails":{...data}};
//       }
//       // const updatedBasicInfo = { ...basicInfo, ...data };
//       localStorage.setItem("basicInfo", JSON.stringify(updatedBasicInfo));
//     }
//   }, [data]);

//   const navigate = useNavigate();

//   const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     let url='';
//     if (localStorage.getItem('type')==="Individual"){
//        url = `${import.meta.env.VITE_APP_API_URL}new/apply`;
//     }else if(localStorage.getItem('type')==="Organization"){
//       url = `${import.meta.env.VITE_APP_API_URL}new/org-apply`;
//     }else if(localStorage.getItem('type')==="Joint"){
//       url = `${import.meta.env.VITE_APP_API_URL}new/joint-apply`;
//     }
//     const dataEntered = localStorage.getItem("basicInfo");
//     const parsedDataEntered = dataEntered ? JSON.parse(dataEntered) : {};

//     const entry = {
//       ...parsedDataEntered,
//       indenture,
//       formerAllocation,
//       photographicID,
//       sitePlan,
//       passportPhoto,
//     };

//     try {
//       const response = await authorizedFetch(url, entry);
//       console.log(response?.data);
//       navigate("/myapplications");
//       setCurrentForm("basic");
//     } catch (error) {
//       return;
//     }
//     localStorage.removeItem("basicInfo");
//   };

//   return (
//     <div>
//       <div className={styles.breadScrum}>
//         <svg
//           onClick={() => {
//             setCurrentComponent("welcome");
//           }}
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M5.66667 13.1663H12.3333M8.18141 1.30297L2.52949 5.6989C2.15168 5.99276 1.96278 6.13968 1.82669 6.32368C1.70614 6.48667 1.61633 6.67029 1.56169 6.86551C1.5 7.0859 1.5 7.32521 1.5 7.80384V13.833C1.5 14.7664 1.5 15.2331 1.68166 15.5896C1.84144 15.9032 2.09641 16.1582 2.41002 16.318C2.76654 16.4996 3.23325 16.4996 4.16667 16.4996H13.8333C14.7668 16.4996 15.2335 16.4996 15.59 16.318C15.9036 16.1582 16.1586 15.9032 16.3183 15.5896C16.5 15.2331 16.5 14.7664 16.5 13.833V7.80384C16.5 7.32521 16.5 7.0859 16.4383 6.86551C16.3837 6.67029 16.2939 6.48667 16.1733 6.32368C16.0372 6.13968 15.8483 5.99276 15.4705 5.69891L9.81859 1.30297C9.52582 1.07526 9.37943 0.9614 9.21779 0.917634C9.07516 0.879018 8.92484 0.879018 8.78221 0.917634C8.62057 0.9614 8.47418 1.07526 8.18141 1.30297Z"
//             stroke="#667085"
//             stroke-width="1.66667"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M6 12L10 8L6 4"
//             stroke="#D0D5DD"
//             stroke-width="1.33333"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//         <p
//           onClick={() => {
//             setCurrentComponent("type");
//           }}
//         >
//           {type}
//         </p>
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M6 12L10 8L6 4"
//             stroke="#D0D5DD"
//             stroke-width="1.33333"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//         <p
//           onClick={() => {
//             setCurrentForm("basic");
//           }}
//         >
//           Basic Information
//         </p>
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M6 12L10 8L6 4"
//             stroke="#D0D5DD"
//             stroke-width="1.33333"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//         <p
//           onClick={() => {
//             setCurrentForm("document");
//           }}
//         >
//           Document upload
//         </p>
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M6 12L10 8L6 4"
//             stroke="#D0D5DD"
//             stroke-width="1.33333"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//         <p className={styles.active}>Land details</p>
//       </div>
//       <div className={styles.progress}>
//         <LandProgressBar />
//       </div>
//       <div className={styles.all}>
//         <div className={styles.basicForm}>
//           <div className={styles.head}>
//             <h3>Land details</h3>
//             <p>
//               Provide Essential Land Details for Seamless Application Processing
//             </p>
//           </div>
//           <div className={styles.form}>
//             <form>
//               <div className={styles.left}>
//                 <div className={styles.section}>
//                   <label>Name of Locality*</label>
//                   <input
//                     type="text"
//                     placeholder="Enter name of locality"
//                     required
//                     value={locality}
//                     onChange={(e) => setLocality(e.target.value)}
//                   />
//                 </div>
//                 <div className={styles.section}>
//                   <label>Plot number(s)*</label>
//                   <input
//                     type="number"
//                     placeholder="Enter plot number"
//                     value={plotNumber}
//                     onChange={(e) => setPlotNumber(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className={styles.section}>
//                   <label>Land Size*</label>
//                   <input
//                     type="email"
//                     placeholder="Enter land size"
//                     value={landSize}
//                     onChange={(e) => setLandSize(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className={styles.section}>
//                   <label>Date of original transfer*</label>
//                   <input
//                     type="date"
//                     value={transferDate}
//                     onChange={(e) => setTransferDate(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className={styles.section}>
//                   <label>Transferor Contact</label>
//                   <input
//                     type="tel"
//                     placeholder="Enter contact here"
//                     value={transferorContact}
//                     onChange={(e) => setTransferorContact(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className={styles.right}>
//                 <div className={styles.section}>
//                   <label>Name of site*</label>
//                   <input
//                     type="text"
//                     placeholder="Enter name of site"
//                     value={siteName}
//                     onChange={(e) => setSiteName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className={styles.section}>
//                   <label>Contact Number*</label>
//                   <input
//                     type="number"
//                     placeholder="Enter contact here"
//                     value={contactNumber}
//                     onChange={(e) => setContactNumber(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className={styles.section}>
//                   <label>Street name*</label>
//                   <input
//                     type="text"
//                     placeholder="Enter place of residence"
//                     value={streetName}
//                     onChange={(e) => setStreetName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className={styles.section}>
//                   <label>Purpose of land*</label>
//                   <select
//                     value={purpose}
//                     onChange={(e) => setPurpose(e.target.value)}
//                   >
//                     <option value="Residence">Residence</option>
//                     <option value="Commercial">Commercial</option>
//                     <option value="Farming">Farming</option>
//                     <option value="Others">Others</option>
//                   </select>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className={styles.buttons}>
//           <button className={styles.previous} onClick={handleToPreviousForm}>
//             Previous
//           </button>
//           <button onClick={handleFormSubmit}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandDetails;

// const authorizedFetch = async (url: string, data: unknown) => {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       throw new Error("Authorization token not found");
//     }
//     const headers = {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "multipart/form-data",
//     };
//     const response = await axios.post(url, data, { headers });
//     return response;
//   } catch (error) {
//     if (
//       axios.isAxiosError(error) &&
//       error.response &&
//       error.response.status === 401
//     ) {
//       alert("Session expired, log out and log in again");
//     }
//   }
// };


import styles from "./LandDetails.module.css";
import { FormContext } from "../../context/DynamicFormContext";
import { useContext, useEffect, useState } from "react";
import { ComponentTypeContext } from "../../context/DynamicHomeComponents";
import LandProgressBar from "../LandProgressBar/LandProgressBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFileContext } from "../../context/FileContext";

const LandDetails = () => {
  const formCtx = useContext(FormContext);
  if (!formCtx) {
    return null;
  }

  const { setCurrentForm } = formCtx;
  const handleToPreviousForm = () => {
    setCurrentForm("document");
  };

  const {
    indenture,
    formerAllocation,
    photographicID,
    sitePlan,
    passportPhoto,
  } = useFileContext();

  const componentCtx = useContext(ComponentTypeContext);

  if (!componentCtx) {
    return null;
  }
  const { setCurrentComponent } = componentCtx;
  const type = localStorage.getItem("type");

  const [locality, setLocality] = useState("");
  const [plotNumber, setPlotNumber] = useState("");
  const [landSize, setLandSize] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [transferorContact, setTransferorContact] = useState("");
  const [siteName, setSiteName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [purpose, setPurpose] = useState("Residence");
  const [loading, setLoading] = useState(false);

  const data = {
    landLocality: locality,
    siteName: siteName,
    plotNumbers: plotNumber,
    totalLandSize: landSize,
    streetName: streetName,
    landTransferor: contactNumber,
    dateOfOriginalTransfer: transferDate ? `${transferDate}T00:00:00Z` : "",
    purposeOfLand: purpose,
    contactOfTransferor: transferorContact,
  };

  useEffect(() => {
    const storedBasicInfo = localStorage.getItem("basicInfo");
    if (storedBasicInfo) {
      const basicInfo = JSON.parse(storedBasicInfo);
      // Merge data with basicInfo
      let updatedBasicInfo;
      if (
        localStorage.getItem("type") === "Individual" ||
        localStorage.getItem("type") === "Organization"
      ) {
        updatedBasicInfo = { ...basicInfo, ...data };
      } else if (localStorage.getItem("type") === "Joint") {
        updatedBasicInfo = { ...basicInfo, landDetails: { ...data } };
      }
      localStorage.setItem("basicInfo", JSON.stringify(updatedBasicInfo));
    }
  }, [data]);

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    let url = "";
    if (localStorage.getItem("type") === "Individual") {
      url = `${import.meta.env.VITE_APP_API_URL}new/apply`;
    } else if (localStorage.getItem("type") === "Organization") {
      url = `${import.meta.env.VITE_APP_API_URL}new/org-apply`;
    } else if (localStorage.getItem("type") === "Joint") {
      url = `${import.meta.env.VITE_APP_API_URL}new/joint-apply`;
    }
    const dataEntered = localStorage.getItem("basicInfo");
    const parsedDataEntered = dataEntered ? JSON.parse(dataEntered) : {};

    const entry = {
      ...parsedDataEntered,
      indenture,
      formerAllocation,
      photographicID,
      sitePlan,
      passportPhoto,
    };

    try {
      const response = await authorizedFetch(url, entry);
      console.log(response?.data);
      navigate("/myapplications");
      setCurrentForm("basic");
      localStorage.removeItem("basicInfo");
    } catch (error) {
      console.error("Error making request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
        <p
          onClick={() => {
            setCurrentForm("basic");
          }}
        >
          Basic Information
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
        <p
          onClick={() => {
            setCurrentForm("document");
          }}
        >
          Document upload
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
        <p className={styles.active}>Land details</p>
      </div>
      <div className={styles.progress}>
        <LandProgressBar />
      </div>
      <div className={styles.all}>
        <div className={styles.basicForm}>
          <div className={styles.head}>
            <h3>Land details</h3>
            <p>
              Provide Essential Land Details for Seamless Application Processing
            </p>
          </div>
          <div className={styles.form}>
            <form>
              <div className={styles.left}>
                <div className={styles.section}>
                  <label>Name of Locality*</label>
                  <input
                    type="text"
                    placeholder="Enter name of locality"
                    required
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                  />
                </div>
                <div className={styles.section}>
                  <label>Plot number(s)*</label>
                  <input
                    type="number"
                    placeholder="Enter plot number"
                    value={plotNumber}
                    onChange={(e) => setPlotNumber(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.section}>
                  <label>Land Size*</label>
                  <input
                    type="email"
                    placeholder="Enter land size"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.section}>
                  <label>Date of original transfer*</label>
                  <input
                    type="date"
                    value={transferDate}
                    onChange={(e) => setTransferDate(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.section}>
                  <label>Transferor Contact</label>
                  <input
                    type="tel"
                    placeholder="Enter contact here"
                    value={transferorContact}
                    onChange={(e) => setTransferorContact(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.section}>
                  <label>Name of site*</label>
                  <input
                    type="text"
                    placeholder="Enter name of site"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.section}>
                  <label>Contact Number*</label>
                  <input
                    type="number"
                    placeholder="Enter contact here"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.section}>
                  <label>Street name*</label>
                  <input
                    type="text"
                    placeholder="Enter place of residence"
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.section}>
                  <label>Purpose of land*</label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  >
                    <option value="Residence">Residence</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Farming">Farming</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.previous} onClick={handleToPreviousForm}>
            Previous
          </button>
          <button onClick={handleFormSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandDetails;

const authorizedFetch = async (url: string, data: unknown) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token not found");
    }
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 401
    ) {
      alert("Session expired, log out and log in again");
    }
    throw error;
  }
};
