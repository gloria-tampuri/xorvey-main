import styles from "./Help.module.css";

const Help = () => {
  return (
    <div className={styles.help}>
      <h3>Guidelines for Acquiring Stool Land</h3>

      <div className={styles.section}>
        <h4>Applicant Information</h4>
        <ul>
          <li>
            Fill out all required fields accurately with your personal
            information.
          </li>
          <li>
            Provide details such as name, date of birth, contact information,
            and email address.
          </li>
          <li>
            Include additional information such as place of residence, hometown,
            marital status, and next of kin.
          </li>
        </ul>
      </div>

      
      <div className={styles.section}>
        <h4>Document Upload</h4>
        <ul>
          <li>
          Attach necessary documents such as Indenture, Former allocation, Site plan, and Photographic ID card.
          </li>
          <li>
          Ensure all documents are clear, legible, and in the specified format.
          </li>
          <li>
          Optionally, upload or take a passport-sized photo for identification purposes
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>Land Details</h4>
        <ul>
          <li>
          Enter detailed information about the land you are applying for allocation.
          </li>
          <li>
          Provide the name of the locality, site name, plot number(s), and total size of land area (acreage/hectare).
          </li>
          <li>
          Include street name, details of the land transferor, date of original transfer, purpose of land usage, and contact information of the transferor (if applicable).
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>Payment Options</h4>
        <ul>
          <li>
          Choose your preferred payment method for processing fees, inspection fees, and any other applicable fees.
          </li>
          <li>
          Make the necessary payment either online through secure gateways or through manual methods as indicated.
          </li>
          <li>
          By following these guidelines, you can ensure a smooth and successful application process for Stool Land Allocation Certification.
          </li>
        </ul>
      </div>




    </div>
  );
};

export default Help;
