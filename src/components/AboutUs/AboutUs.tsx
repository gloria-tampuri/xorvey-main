import styles from "./AboutUs.module.css";
import chief from '/src/assets/Images/Frame 32.png'
import lands from "/src/assets/Images/Frame 32.jpg"

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <h4 className={styles.topic}>About us</h4>
      <div className={styles.parts}>
        <div className={styles.part1}>
              <img src={chief} alt="chief"/>
        </div>
        <div className={styles.part2}>
          <div className={styles.div}>
            <h1>EMPOWERING COMMUNITIES THROUGH RESPONSIBLE LAND GOVERNANCE</h1>
          </div>
          <p>
            Our initiative is dedicated to modernizing and streamlining the
            traditional process of Stool Land Allocation Certification. By
            digitizing application procedures and ensuring transparency in land
            allocation, we aim to empower individuals and communities. Our
            mission is to provide legal recognition, promote sustainable
            development, and preserve cultural heritage while fostering economic
            empowerment. Join us as we navigate the intersection of tradition
            and innovation, working towards equitable land governance and
            community prosperity.
          </p>
        </div>
        <div className={styles.part12}>
              <img src={lands} alt="lands"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
