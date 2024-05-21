import { Link } from "react-router-dom";
import styles from "./StartProcess.module.css";
import human from '/src/assets/Images/Frame 135.jpg'

const StartProcess = () => {
  return (
    <div className={styles.journey}>
      <div className={styles.human}>
        <img src={human} alt="Human" /> 
      </div>
      <div className={styles.text}>
        <div className={styles.topic}>
          <h1>
            UNLOCK YOUR LAND RIGHTS TODAY: START YOUR 
            <span> APPLICATION JOURNEY</span>
          </h1>
        </div>
          <p>
            At Allocation Certification, we're dedicated to empowering you
            through the Stool Land Certification process. Take the first step
            towards securing your land rights, promoting sustainable
            development, and preserving cultural heritage. Begin your
            application journey now to unlock the benefits of certification and
            pave the way for a brighter future.
          </p>
        <Link className={styles.link} to="/signup">Start your journey now</Link>
      </div>
    </div>
  );
};

export default StartProcess;
