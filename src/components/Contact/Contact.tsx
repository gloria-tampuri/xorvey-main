import SmallSocials from "../SVGs/SmallSocials";
import styles from "./Contact.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h4>Contact Us</h4>
      <div className={styles.section1}>
        <div className={styles.innersection}>
          <div className={styles.text}>
           <div className={styles.heads}>
           <h1>CONNECT</h1>
            <h1 className={styles.h2}>WITH US</h1>
           </div>
            <p className={styles.first}>
            Connect with us to access personalized support, timely assistance, and valuable resources for your Stool Land Certification process. Stay informed about your application status, receive important updates, and get expert guidance whenever you need it. We're here to help you navigate your certification journey with ease and confidence.
            </p>
            <p className={styles.second}>Call us:</p>
            <p className={styles.third}>(233) 20 402 1234</p>
            <p className={styles.second}>Follow us:</p>
            <div className={styles.social}>
              <SmallSocials />
            </div>
          </div>
          <div className={styles.form}>
            <h2>Get in Touch</h2>
            <p>You can reach us anytime</p>
            <form>
              <div className={styles.name}>
                <input
                  className={styles.nameinput}
                  type="text"
                  placeholder="First name"
                />
                <input
                  className={styles.nameinput}
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className={styles.section}>
                <HiOutlineMail style={{ fontSize: "1.3rem" }} />
                <input type="text" placeholder="Your email" />
              </div>
              <div className={styles.section}>
                <IoCallOutline style={{ fontSize: "1.3rem" }} />
                <input type="text" placeholder="Phone number" />
              </div>
              <div className={styles.section}>
                <textarea
                  rows={4}
                  cols={33}
                  placeholder="Enter your text here..."
                />
              </div>
              <button>Submit</button>
            </form>
            <p className={styles.note}>
              By contacting us, you agree to our <span>Terms of service</span> and <span>Privacy
              Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
