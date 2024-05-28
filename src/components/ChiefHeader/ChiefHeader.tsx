import LogoSvg from "../SVGs/LogoSvg";
import styles from "./ChiefHeader.module.css";
import { LuHome, LuUsers2 } from "react-icons/lu";
import { CiBellOn, CiFileOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { TiEyeOutline } from "react-icons/ti";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { CgMenu } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import { BsTicketPerforated } from "react-icons/bs";

const ChiefHeader = () => {
    const location = useLocation();
    const isHomeActive = location.pathname === "/applicanthome";
    const isApplicationsActive = location.pathname === "/myapplications";
    const navigate = useNavigate(); // Hook to access the history object for navigation
    const [name, setName] = useState("");
    const [initials, setInitials] = useState("");
    const [openMenu, setOpenMenu] = useState<boolean>(false);
  
    useEffect(() => {
      const userString = localStorage.getItem("user");
      if (userString !== null) {
        const user = JSON.parse(userString);
        console.log(user);
        setName(user.name);
        setInitials(getInitials(user.name)); // Set initials when user name is available
      } else {
        console.error("User data not found in localStorage");
      }
    }, []); // Empty dependency array ensures the effect runs only once on component mount
  
    const getInitials = (fullName: string) => {
      return fullName
        .split(" ")
        .map((namePart) => namePart.charAt(0).toUpperCase())
        .join("");
    };
  
    const logout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.clear();
      navigate("/login");
    };
  
    const [showSettings, setShowSettings] = useState(false);
  
    return (
      <div className={styles.head}>
        <div className={styles.header}>
          <div className={styles.formenu}>
            <div className={styles.menubar}>
              <CgMenu className={styles.icon} onClick={() => setOpenMenu(true)} />
            </div>
            <LogoSvg />
          </div>
  
          <nav>
            <ul>
              <li>
                <Link
                  to="/chiefhome"
                  className={`${styles.link} ${
                    isHomeActive ? styles.activeLink : ""
                  }`}
                >
                  <LuHome /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="users"
                  className={`${styles.link} ${
                    isApplicationsActive ? styles.activeLink : ""
                  }`}
                >
                 <LuUsers2 />Users
                </Link>
              </li>
              
            </ul>
          </nav>
          <div className={styles.info}>
            <Link to="/help" className={styles.link}>
              <FaRegCircleQuestion />
              Help
            </Link>
            <CiBellOn />
            <div className={styles.forSet}>
              <div className={styles.person}>
                <div className={styles.initialscover}>
                  <div className={styles.initials}>{initials}</div>
                </div>
                <p>{name}</p>
                {showSettings ? (
                  <span>
                    <IoIosArrowUp
                      onClick={() => {
                        setShowSettings(false);
                      }}
                    />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown
                      onClick={() => {
                        setShowSettings(true);
                      }}
                    />
                  </span>
                )}
              </div>
              {showSettings && (
                <div className={styles.settings}>
                  <p className={styles.set}>
                    <TiEyeOutline />
                    Account Settings
                  </p>
                  <p onClick={logout} className={styles.set}>
                    <IoLogOutOutline />
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {openMenu && (
          <div className={styles.menuLayer}>
            <div className={styles.openedMenuHeader}>
              <div className={styles.logo}>
                <LogoSvg />
              </div>
              <div>
                <TfiClose onClick={() => setOpenMenu(false)} />
              </div>
            </div>
            <div className={styles.forSetM}>
              <div className={styles.personM}>
                <div className={styles.initialscoverM}>
                  <div className={styles.initialsM}>{initials}</div>
                </div>
                <p>{name}</p>
              </div>
              <Link to="/help" className={styles.link}>
                <FaRegCircleQuestion />
                Help
              </Link>
              <div className={styles.settingsM}>
                <p className={styles.set}>
                  <TiEyeOutline />
                  Account Settings
                </p>
                <p onClick={logout} className={styles.set}>
                  <IoLogOutOutline />
                  Logout
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };


export default ChiefHeader