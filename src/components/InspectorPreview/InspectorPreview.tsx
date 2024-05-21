import styles from "./InspectorPreview.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import Ticket from "../Ticket/Ticket";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApproveModalContext } from "../../context/ShowApprovedModalContext";
import ApproveModal from "../ApproveModal/ApproveModal";
import { DeniedModalContext } from "../../context/ShowDeniedModal";
import DeniedModal from "../DeniedModal/DeniedModal";
import { AddProofModalContext } from "../../context/AddProofContext";
import AddProofModal from "../AddProofModal/AddProofModal";

const InspectorPreview = () => {
  const { approveModal, showApproveModal } = useContext(ApproveModalContext)!;
  const { deniedModal, showDeniedModal } = useContext(DeniedModalContext)!;
  const {addProofModal, showAddProofModal}= useContext(AddProofModalContext)!

  const [approveToggled, setApprovedToggled] = useState(false);
  const [deniedToggled, setDeniedToggled] = useState(false);

  const handleApprovedToggle = () => {
    setApprovedToggled(!approveToggled);
  };

  useEffect(() => {
    if (approveToggled === true) {
      showApproveModal();
    }
  }, [approveToggled]);

  const handleDeniedToggle = () => {
    setDeniedToggled(!deniedToggled);
    // showApproveModal()
  };
  useEffect(() => {
    if (deniedToggled === true) {
      showDeniedModal();
    }
  }, [deniedToggled]);

  const [showTrack, setShowTrack] = useState("preview");
  const showPreview = () => {
    setShowTrack("preview");
  };
  const showAttachment = () => {
    setShowTrack("attachments");
  };
  const showFormInfo = () => {
    setShowTrack("addverification");
  };
  return (
    <div className={styles.preview}>
      <div className={styles.head}>
        <Link to="/inspectorhome" className={styles.link}>
          <IoMdArrowBack />
          Back
        </Link>
        <div className={styles.links}>
          <p
            className={`${showTrack === "preview" ? styles.previewlink : ""}`}
            onClick={showPreview}
          >
            <LuEye />
            Preview
          </p>
          <p
            onClick={showAttachment}
            className={`${
              showTrack === "attachments" ? styles.previewlink : ""
            }`}
          >
            {" "}
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10H17L14 19L8 1L5 10H1"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Attachments
          </p>
        </div>
        <div>
          <Link to="" onClick={showFormInfo} className={styles.link}>
            <IoIosAddCircleOutline /> Add prove of verification
          </Link>
        </div>
      </div>

      {showTrack === "preview" ? (
        <div className={styles.info}>
          <div className={styles.status}>
            <p>Select Application Status:</p>
            <div>
              <p>Approved</p>
              <button
                className={`${styles.toggleBtn} ${
                  approveToggled ? styles.toggled : ""
                }`}
                onClick={handleApprovedToggle}
              >
                <div className={styles.thumb}> </div>
              </button>
            </div>
            <div>
              <p>Denied</p>
              <button
                className={`${styles.toggleBtn} ${
                  deniedToggled ? styles.toggled : ""
                }`}
                onClick={handleDeniedToggle}
              >
                <div className={styles.thumb}> </div>
              </button>
            </div>
          </div>
          <div className={styles.appli}>
            <h3>Application</h3>
            <div className={styles.subheaders3}>
              <p>Application type</p>
              <p>Application ID</p>
              <p>Application status</p>
            </div>
            <div className={styles.body3}>
              <p>Joint</p>
              <p>12345</p>
              <p>Pending</p>
            </div>
          </div>
          <div className={styles.appli}>
            <h3>Basic Information</h3>
            <div className={styles.subheaders2}>
              <p>Full name</p>
              <p>Date of birth</p>
            </div>
            <div className={styles.body2}>
              <p>Gloria Tampuri</p>
              <p>16/08/1890</p>
            </div>
          </div>
          <div className={styles.appli}>
            <div className={styles.subheaders2}>
              <p>Mailing Address</p>
              <p>Contact Number</p>
            </div>
            <div className={styles.body2}>
              <p>GS-1232-123</p>
              <p>+233 209 184 6727</p>
            </div>
          </div>
          <div className={styles.appli}>
            <div className={styles.subheaders2}>
              <p>email adress</p>
              <p>place of residence</p>
            </div>
            <div className={styles.body2}>
              <p>gloria@gmail.com</p>
              <p>Weija</p>
            </div>
          </div>
          <div className={styles.appli}>
            <div className={styles.subheaders3}>
              <p>hometown</p>
              <p>marital status</p>
              <p>next of kin</p>
            </div>
            <div className={styles.body3}>
              <p>Kumasi</p>
              <p>Single</p>
              <p>Olivia Ryhe</p>
            </div>
          </div>
          <div className={styles.appli}>
            <h3>Documents</h3>
            <div className={styles.subheaders2}>
              <p>Indenture</p>
              <p>Former allocation</p>
            </div>
            <div className={styles.body2}>
              <p className={styles.attchements}>indeture.png</p>
              <p className={styles.attchements}>allocation.jpeg</p>
            </div>
          </div>
          <div className={styles.appli}>
            <div className={styles.subheaders3}>
              <p>Photographic ID Card</p>
              <p>Site Plan</p>
              <p>passport ID</p>
            </div>
            <div className={styles.body3}>
              <p className={styles.attchements}>photographicId.png</p>
              <p className={styles.attchements}>siteplan.jpeg</p>
              <p className={styles.attchements}>nationalId.png</p>
            </div>
          </div>
          <div className={styles.appli}>
            <h3>Land Details</h3>
            <div className={styles.subheaders2}>
              <p>Name of locality</p>
              <p>Name of site</p>
            </div>
            <div className={styles.body2}>
              <p>Gloria Tampuri</p>
              <p>16/08/1890</p>
            </div>
          </div>
          <div className={styles.appli}>
            <div className={styles.subheaders2}>
              <p>plot number(s)</p>
              <p>contact number</p>
            </div>
            <div className={styles.body2}>
              <p>2</p>
              <p>233 30 9123</p>
            </div>
          </div>
          <div className={styles.appli}>
            <div className={styles.subheaders2}>
              <p>land size</p>
              <p>street name</p>
            </div>
            <div className={styles.body2}>
              <p>144 acres</p>
              <p>Tuba</p>
            </div>
          </div>
          <div className={styles.appli}>
            <div className={styles.subheaders3}>
              <p>Date of origional transferor</p>
              <p>purpose of land</p>
              <p>transferor contact</p>
            </div>
            <div className={styles.body3}>
              <p>14/03/1090</p>
              <p>Residence</p>
              <p>233 209 123 232</p>
            </div>
          </div>
        </div>
      ) : showTrack === "attachments" ? (
        <div>attachments</div>
      ) : (
<div className={styles.all}>
        <div className={styles.basicForm}>
          <div className={styles.headb}>
            <h3>Add proof of verification</h3>
            <p>
            Upload any evidence or supporting documentation related to your inspection findings.            </p>
          </div>
          <div className={styles.form}>
            <form>
              <div className={styles.left}>
                <div className={styles.section}>
                  <label htmlFor="indenture">Evidence of site visit*</label>
                  <input
                    type="file"
                    id="indenture"
                    // onChange={(e) => handleFileChange(e, setIndenture)}
                  />
                </div>
                <div className={styles.section}>
                  <label htmlFor="photographicID">Evidence transferor’s remarks*</label>
                  <input
                    type="file"
                    id="photographicID"
                    // onChange={(e) => handleFileChange(e, setPhotographicID)}
                  />
                </div>
                <div className={styles.section}>
                  <label htmlFor="passportPhoto">Evidence of head stool lands affairs remarks*</label>
                  <input
                    type="file"
                    id="passportPhoto"
                    // onChange={(e) => handleFileChange(e, setPassportPhoto)}
                  />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.section}>
                  <label htmlFor="formerAllocation">Evidence of surveyor’s remarks*</label>
                  <input
                    type="file"
                    id="formerAllocation"
                    // onChange={(e) => handleFileChange(e, setFormerAllocation)}
                  />
                </div>
                <div className={styles.section}>
                  <label htmlFor="sitePlan">Evidence of planning remarks*</label>
                  <input
                    type="file"
                    id="sitePlan"
                    // onChange={(e) => handleFileChange(e, setSitePlan)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.previous} >
            Cancel
          </button>
          <button onClick={()=>{showAddProofModal()}}>Add</button>
        </div>
      </div>      )}

      <Ticket />
      {approveModal && <ApproveModal />}
      {deniedModal && <DeniedModal />}
      {addProofModal&& <AddProofModal/>}
    </div>
  );
};

export default InspectorPreview;
