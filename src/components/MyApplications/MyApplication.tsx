import { CiSearch } from "react-icons/ci";
import styles from "./MyApplication.module.css";
import { LuListFilter } from "react-icons/lu";
import { HiArrowSmDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import Ticket from "../Ticket/Ticket";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaRegFile } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import axios from "axios";

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
const MyApplication = () => {
  const [completed, setCompleted] = useState(false);
  const [allForms, setAllForms] = useState<Form[]>([]);
  const [filledForms, setFilledForms] = useState<Form[]>([]);
  const [unusedForms, setUnusedForms] = useState<Form[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Set the Authorization header with the token value
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const apiUrl = `${import.meta.env.VITE_APP_API_URL}new/applications`;
    axios
      .get(apiUrl, config)
      .then((response) => {
        const forms: Form[] = response.data.forms;
        setAllForms(response.data.forms);
        const filledForms = forms.filter(
          (form) => form.formStatus === "FILLED"
        );
        const unusedForms = forms.filter((form) => form.status === "UNUSED");
        setFilledForms(filledForms);
        setUnusedForms(unusedForms);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(filledForms);
  console.log(unusedForms);
  console.log(allForms);

  const [showContinueArray, setShowContinueArray] = useState(
    Array(unusedForms.length).fill(false)
  );
  // Function to reset showContinueArray to all false values
  const resetShowContinueArray = () => {
    setShowContinueArray(Array(unusedForms.length).fill(false));
  };

  return (
    <div>
      <div className={styles.allstatus}>
        <p
          onClick={() => {
            setCompleted(false);
            resetShowContinueArray();
          }}
          className={completed === false ? styles.active : ""}
        >
          <FaRegFile />
          Uncompleted
        </p>
        <p
          onClick={() => {
            setCompleted(true);
            resetShowContinueArray();
          }}
          className={completed === true ? styles.active : ""}
        >
          <FaRegFileAlt />
          Completed
        </p>
      </div>
      {completed ? (
        <div className={styles.application}>
          <div className={styles.head}>
            <h3>Applications</h3>
            <div className={styles.filterDiv}>
              <div className={styles.search}>
                <CiSearch className={styles.icon} />
                <input type="text" placeholder="Search applications here" />
              </div>
              <div className={styles.filter}>
                <LuListFilter />
                <select>
                  <option> Filter</option>
                  <option>Denied</option>
                  <option>Approved</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.tablehead}>
              <p className={styles.persons}>
                <span>Applications</span>
                <HiArrowSmDown className="arrow" />
              </p>
              <p>Application type</p>
              <p className="id">Date submited</p>
              <p>Payment Status</p>
              <p>Amount(GHC)</p>
              <p>Status</p>
            </div>
            {filledForms?.map((form, index) => (
              <div className={styles.tablebody}>
                <div className={styles.id}>
                  <input type="checkbox" className="input" />

                  <p>{form.uniqueFormID}</p>
                </div>
                <div>
                  <p>{form.type}</p>
                </div>
                <div className={styles.date}>{form.createdAt}</div>
                <div>
                  <p>Full Payment</p>
                </div>
                <div>
                  <p>200.00</p>
                </div>
                <div className={styles.status}>
                  <p>
                    <span>
                      <BsDot style={{ fontSize: "1.2rem" }} />
                    </span>
                    {form.status}
                  </p>
                  <HiOutlineDotsVertical
                    onClick={() => {
                      setShowContinueArray((prevShowContinueArray) => {
                        const newShowContinueArray = [...prevShowContinueArray];
                        newShowContinueArray[index] =
                          !newShowContinueArray[index];
                        return newShowContinueArray;
                      });
                    }}
                  />
                  {showContinueArray[index] && (
                    <div className={styles.continue}>
                      <Link to={`${form.uniqueFormID}`} className={styles.card}>
                        View Application
                      </Link>
                      <Link to={`/payment`} className={styles.card}>
                        Make payment
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Ticket />
        </div>
      ) : (
        <div>
          <div className={styles.application}>
            <div className={styles.head}>
              <h3>Uncompleted Applications</h3>
              <div className={styles.filterDiv}>
                <div className={styles.search}>
                  <CiSearch className={styles.icon} />
                  <input type="text" placeholder="Search applications here" />
                </div>
                <div className={styles.filter}>
                  <LuListFilter />
                  <select>
                    <option> Filter</option>
                    <option>Denied</option>
                    <option>Approved</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.tablehead}>
                <p className={styles.persons}>
                  <span>Applications</span>
                  <HiArrowSmDown className="arrow" />
                </p>
                <p>Voucher number</p>
                <p>Application type</p>
                <p className="id">Date submited</p>
                <p></p>
                <p>Action</p>
              </div>
              {unusedForms?.map((form, index) => (
                <div className={styles.tablebody}>
                  <div className={styles.id}>
                    <input type="checkbox" className="input" />

                    <p>{form.token}</p>
                  </div>
                  <div>
                    <p>{form.clientReference}</p>
                  </div>
                  <div>
                    <p>{form.serviceId}</p>
                  </div>
                  <div className={styles.date}>{form.createdAt}</div>

                  <div>
                    <p></p>
                  </div>
                  <div className={styles.status}>
                    <HiOutlineDotsVertical
                      onClick={() => {
                        setShowContinueArray((prevShowContinueArray) => {
                          const newShowContinueArray = [
                            ...prevShowContinueArray,
                          ];
                          newShowContinueArray[index] =
                            !newShowContinueArray[index];
                          return newShowContinueArray;
                        });
                      }}
                    />
                    {showContinueArray[index] && (
                      <div className={styles.continue}>
                        <Link to={`/${form.serviceId}`} className={styles.card}>
                          Continue application
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Ticket />
          </div>
          :
        </div>
      )}
    </div>
  );
};

export default MyApplication;
