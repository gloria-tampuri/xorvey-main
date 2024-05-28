import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./Schedule.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";

const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <div className={styles.head}>
        <h3>Schedule appointment</h3>
        <div className={styles.add}>
          <IoIosAddCircleOutline className={styles.icon} />
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h4>Inspection session coordination</h4>
          <div className={styles.name}>
            <p>Savannah Nguyen</p>
            <RiDeleteBin6Line />
          </div>
          <div className={styles.inspection}>
            <p>inspection</p>
            <div className={styles.date}>
              <CiCalendarDate /> Dec 17,20216 15:40
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h4>Inspection session coordination</h4>
          <div className={styles.name}>
            <p>Savannah Nguyen</p>
            <RiDeleteBin6Line />
          </div>
          <div className={styles.inspection}>
            <p>inspection</p>
            <div className={styles.date}>
              <CiCalendarDate /> Dec 17,20216 15:40
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
