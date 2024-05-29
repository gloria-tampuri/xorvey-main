import { IoIosArrowRoundUp } from "react-icons/io";
import styles from "./ChiefHome.module.css";
import SecApplications from "../SecApplications/SecApplications";
import Schedule from "../Schedule/Schedule";
import axios from 'axios';
import { useEffect, useState } from "react";

interface Form {
  uniqueFormID: string;
  type: string;
  createdAt: string;
  status: string;
  token: string;
  serviceId: string;
  formStatus: string;
  clientReference: string;
}
const ChiefHome = () => {

const [allApplications, setApplications]=useState<Form[]>([]);

useEffect(() => {
  const fetchApplications = async () => {
    const token = localStorage.getItem('token');
    console.log(token);

    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}all/forms`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Response:', response.data);
      setApplications(response.data.forms);
    } catch (error) {
      console.error('Error making request:', error);
    }
  };

  fetchApplications();
}, []); 

console.log(allApplications);

  return (
    <div className={styles.home}>
      <div className={styles.new}>
        <p>New Application</p>
      </div>

      <div className={styles.main}>
        <div className={styles.details}>
          <div className={styles.dashcard}>
            <p>Number of Applications</p>
            <div className={styles.lower}>
              <h1>20</h1>
              <p>
                <IoIosArrowRoundUp />
                100
              </p>
            </div>
          </div>
          <div className={styles.dashcard}>
            <p>Approved Applications</p>
            <div className={styles.lower}>
              <h1>10</h1>
              <p>
                <IoIosArrowRoundUp />
                100
              </p>
            </div>
          </div>
          <div className={styles.dashcard}>
            <p>Denied Applications</p>
            <div className={styles.lower}>
              <h1>5</h1>
              <p>
                <IoIosArrowRoundUp />
                100
              </p>
            </div>
          </div>
        </div>

        <div className={styles.applicationschedules}>
          <div className={styles.application}>
            <SecApplications />
          </div>
          <div className={styles.schedule}>
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefHome;
