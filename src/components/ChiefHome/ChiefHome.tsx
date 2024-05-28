import { IoIosArrowRoundUp } from "react-icons/io";
import styles from "./ChiefHome.module.css";
import SecApplications from "../SecApplications/SecApplications";
import Schedule from "../Schedule/Schedule";

const ChiefHome = () => {
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
