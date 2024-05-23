import styles from "./Preview.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import Ticket from "../Ticket/Ticket";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
  organisationName: string;
  applicantName: string;
  applicantDOB: string;
  contactNumber: string;
  mailingAddress: string;
  placeOfResidence: string;
  emailAddress: string;
  hometown: string;
  maritalStatus: string;
  nextOfKin: string;
  landLocality: string;
  siteName: string;
  contactOfTransferor: string;
  plotNumbers: string;
  totalLandSize: string;
  streetName: string;
  purposeOfLand: string;
  dateOfOriginalTransfer: string;
  location: string;
}

const Preview = () => {
  const [showTrack, setShowTrack] = useState(false);
  const [application, setApplication] = useState<Form | null>(null);
  const [type, setType] = useState("");
  const location = useLocation();
  const pathname = location.pathname;
  const uniqueFormID = pathname.split("/").pop();

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
        const forms = response.data.forms;
        const applicant = forms.find(
          (form: any) => form.uniqueFormID === uniqueFormID
        );
        setApplication(applicant);
        if (applicant) {
          setType(applicant.type);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [uniqueFormID]);

  const handleShowTrack = () => {
    setShowTrack(true);
  };

  const showFormInfo = () => {
    setShowTrack(false);
  };


  return (
    <div className={styles.preview}>
      <div className={styles.head}>
        <Link to="/myapplications" className={styles.link}>
          <IoMdArrowBack />
          Back
        </Link>
        <div className={styles.links}>
          <p
            className={`${showTrack === false ? styles.previewlink : ""}`}
            onClick={showFormInfo}
          >
            <LuEye />
            Preview
          </p>
          <p
            onClick={handleShowTrack}
            className={`${showTrack === true ? styles.previewlink : ""}`}
          >
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Track
          </p>
        </div>
        <div>
          <Link to="/applicanthome" className={styles.link}>
            <GoArrowUpRight /> Start other application
          </Link>
        </div>
      </div>
      {showTrack ? (
        <div className={styles.track}>
          <p className={styles.nb}>
            NB: Green <span className={styles.green}>boxes</span> signify
            completed stages, while blue{" "}
            <span className={styles.blue}>boxes</span> denote those still in
            progress
          </p>
          <div className={styles.stages}>
            <div className={styles.stage}>
              <div className={styles.circle}></div>
              <div className={styles.box1}>
                <p>Application form purchased</p>
                <span>16/04/2024</span>
              </div>
            </div>
            <div className={styles.line1}></div>
            <div className={styles.stage2}>
              <div className={styles.circle}></div>
              <div className={styles.box1}>
                <p>Completed Application form</p>
                <span>16/04/2024</span>
              </div>
            </div>
            <div className={styles.line2}></div>
            <div className={styles.stage3}>
              <div className={styles.circle}></div>
              <div className={styles.inprogressbox}>
                <p>Application under Review</p>
                <span>16/04/2024</span>
              </div>
            </div>
            <div className={styles.line3}></div>
            <div className={styles.stage3}>
              <div className={styles.circle}></div>
              <div className={styles.inprogressbox}>
                <p>Awaiting Processing</p>
                <span>16/04/2024</span>
              </div>
            </div>
            <div className={styles.line4}></div>
            <div className={styles.stage3}>
              <div className={styles.circle}></div>
              <div className={styles.inprogressbox}>
                <p>Application Approved</p>
                <span>16/04/2024</span>
              </div>
            </div>
            <div className={styles.line5}></div>
            <div className={styles.stage3}>
              <div className={styles.circle}></div>
              <div className={styles.inprogressbox}>
                <p>Certificate Received</p>
                <span>16/04/2024</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {(application && type === "individual") ||
            (type === "joint" && (
              <div className={styles.info}>
                <div className={styles.appli}>
                  <h3>Application</h3>
                  <div className={styles.subheaders3}>
                    <p>Application type</p>
                    <p>Application ID</p>
                    <p>Application status</p>
                  </div>
                  <div className={styles.body3}>
                    <p>{application?.type}</p>
                    <p>{application?.uniqueFormID}</p>
                    <p>{application?.status}</p>
                  </div>
                </div>
                <div className={styles.appli}>
                  <h3>Basic Information</h3>
                  <div className={styles.subheaders2}>
                    <p>Full name</p>
                    <p>Date of birth</p>
                  </div>
                  <div className={styles.body2}>
                    <p>{application?.applicantName}</p>
                    <p>{application?.applicantDOB}</p>
                  </div>
                </div>
                <div className={styles.appli}>
                  <div className={styles.subheaders2}>
                    <p>Mailing Address</p>
                    <p>Contact Number</p>
                  </div>
                  <div className={styles.body2}>
                    <p>{application?.mailingAddress}</p>
                    <p>{application?.contactNumber}</p>
                  </div>
                </div>
                <div className={styles.appli}>
                  <div className={styles.subheaders2}>
                    <p>Email Address</p>
                    <p>Place of Residence</p>
                  </div>
                  <div className={styles.body2}>
                    <p>{application?.emailAddress}</p>
                    <p>{application?.placeOfResidence}</p>
                  </div>
                </div>
                <div className={styles.appli}>
                  <div className={styles.subheaders3}>
                    <p>Hometown</p>
                    <p>Marital Status</p>
                    <p>Next of Kin</p>
                  </div>
                  <div className={styles.body3}>
                    <p>{application?.hometown}</p>
                    <p>{application?.maritalStatus}</p>
                    <p>{application?.nextOfKin}</p>
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
                    <p>Passport ID</p>
                  </div>
                  <div className={styles.body3}>
                    <p className={styles.attchements}>id.png</p>
                    <p className={styles.attchements}>siteplan.jpeg</p>
                    <p className={styles.attchements}>passport.png</p>
                  </div>
                </div>

                <div className={styles.appli}>
                  <h3>Land Details</h3>
                  <div className={styles.subheaders2}>
                    <p>Name of locality</p>
                    <p>Name of site</p>
                  </div>
                  <div className={styles.body2}>
                    <p>{application?.landLocality}</p>
                    <p>{application?.siteName}</p>
                  </div>
                </div>
                <div className={styles.appli}>
                  <div className={styles.subheaders2}>
                    <p>plot number(s)</p>
                    <p>contact number</p>
                  </div>
                  <div className={styles.body2}>
                    <p>{application?.plotNumbers}</p>
                    <p>{application?.contactOfTransferor}</p>
                  </div>
                </div>
                <div className={styles.appli}>
                  <div className={styles.subheaders2}>
                    <p>land size</p>
                    <p>street name</p>
                  </div>
                  <div className={styles.body2}>
                    <p>{application?.totalLandSize}</p>
                    <p>{application?.streetName}</p>
                  </div>
                </div>
                <div className={styles.appli}>
                  <div className={styles.subheaders3}>
                    <p>Date of origional transferor</p>
                    <p>purpose of land</p>
                    <p>transferor contact</p>
                  </div>
                  <div className={styles.body3}>
                    <p>{application?.dateOfOriginalTransfer}</p>
                    <p>{application?.purposeOfLand}</p>
                    <p>{application?.contactOfTransferor}</p>
                  </div>
                </div>
                <div className={styles.body2}>
                  <p className={styles.attchements}>other.pdf</p>
                </div>
              </div>
            ))}
          {application && type === "organization" && (
            <div className={styles.info}>
              <div className={styles.appli}>
                <h3>Application</h3>
                <div className={styles.subheaders3}>
                  <p>Application type</p>
                  <p>Application ID</p>
                  <p>Application status</p>
                </div>
                <div className={styles.body3}>
                  <p>{application?.type}</p>
                  <p>{application?.uniqueFormID}</p>
                  <p>{application?.status}</p>
                </div>
              </div>
              <div className={styles.appli}>
                <h3>Basic Information</h3>
                <div className={styles.subheaders2}>
                  <p>Full name</p>
                  <p>Date of birth</p>
                </div>
                <div className={styles.body2}>
                  <p>{application.organisationName}</p>
                  {/* <p>{application?.applicantDOB}</p> */}
                </div>
              </div>
              <div className={styles.appli}>
                <div className={styles.subheaders2}>
                  <p>Mailing Address</p>
                  <p>Contact Number</p>
                </div>
                <div className={styles.body2}>
                  <p>{application?.mailingAddress}</p>
                  <p>{application?.contactNumber}</p>
                </div>
              </div>
              <div className={styles.appli}>
                <div className={styles.subheaders2}>
                  <p>Email Address</p>
                  <p>Location</p>
                </div>
                <div className={styles.body2}>
                  <p>{application?.emailAddress}</p>
                  <p>{application?.location}</p>
                </div>
              </div>
              {/* <div className={styles.appli}>
                <div className={styles.subheaders3}>
                  <p>Hometown</p>
                  <p>Marital Status</p>
                  <p>Next of Kin</p>
                </div>
                <div className={styles.body3}>
                  <p>{application?.hometown}</p>
                  <p>{application?.maritalStatus}</p>
                  <p>{application?.nextOfKin}</p>
                </div>
              </div> */}
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
                  <p>Passport ID</p>
                </div>
                <div className={styles.body3}>
                  <p className={styles.attchements}>id.png</p>
                  <p className={styles.attchements}>siteplan.jpeg</p>
                  <p className={styles.attchements}>passport.png</p>
                </div>
              </div>
              <div className={styles.appli}>
                <h3>Land Details</h3>
                <div className={styles.subheaders2}>
                  <p>Name of locality</p>
                  <p>Name of site</p>
                </div>
                <div className={styles.body2}>
                  <p>{application.landLocality}</p>
                  <p>{application.siteName}</p>
                </div>
              </div>
              <div className={styles.appli}>
                <div className={styles.subheaders2}>
                  <p>plot number(s)</p>
                  <p>contact number</p>
                </div>
                <div className={styles.body2}>
                  <p>{application.plotNumbers}</p>
                  <p>{application.contactOfTransferor}</p>
                </div>
              </div>
              <div className={styles.appli}>
                <div className={styles.subheaders2}>
                  <p>land size</p>
                  <p>street name</p>
                </div>
                <div className={styles.body2}>
                  <p>{application.totalLandSize}</p>
                  <p>{application.streetName}</p>
                </div>
              </div>
              <div className={styles.appli}>
                <div className={styles.subheaders3}>
                  <p>Date of origional transferor</p>
                  <p>purpose of land</p>
                  <p>transferor contact</p>
                </div>
                <div className={styles.body3}>
                  <p>{application.dateOfOriginalTransfer}</p>
                  <p>{application.purposeOfLand}</p>
                  <p>{application.contactOfTransferor}</p>
                </div>
              </div>
              <div className={styles.body2}>
                <p className={styles.attchements}>other.pdf</p>
              </div>
            </div>
          )}
        </>
      )}
      <Ticket />
    </div>
  );
};

export default Preview;
