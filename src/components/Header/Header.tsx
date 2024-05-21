
// import { useState } from "react";
// import { Link } from 'react-router-dom';
// import { GoGlobe } from "react-icons/go";
// import { CgMenu } from "react-icons/cg";
// import { TfiClose } from "react-icons/tfi";
// import LogoSvg from "../SVGs/LogoSvg";
// import styles from "./Header.module.css";

// const Header = () => {
//   const [openMenu, setOpenMenu] = useState<boolean>(false);

//   return (
//     <div className={styles.header}>
//       <div className={styles.formenu}>
//         <div className={styles.menubar}>
//           <CgMenu className={styles.icon} onClick={() => setOpenMenu(true)} />
//         </div>
//         <div className={styles.logo}>
//           <LogoSvg />
//         </div>
//       </div>
//       <div className={styles.menu}>
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#about">About us</a></li>
//             <li><a href="#faqs">FAQs</a></li>
//             <li><a href="#contact">Contact us</a></li>
//           </ul>
//         </nav>
//       </div>
//       <div className={styles.actions}>
//         <nav>
//           <ul>
//             <li className={styles.lang}>
//               <GoGlobe />
//               EN
//             </li>
//             <li><Link className={styles.link} to="/login">Login</Link></li>
//             <li className={styles.signup}><Link className={styles.link} to="/signup">Sign up</Link></li>
//           </ul>
//         </nav>
//       </div>

//       {openMenu && (
//         <div className={styles.menuLayer}>
//           <div className={styles.openedMenuHeader}>
//             <div className={styles.logo}>
//               <LogoSvg />
//             </div>
//             <div>
//               <TfiClose onClick={() => setOpenMenu(false)} />
//             </div>
//           </div>
//           <nav className={styles.mobileNav}>
//             <ul>
//               <li><a href="#home" onClick={() => setOpenMenu(false)}>Home</a></li>
//               <li><a href="#services" onClick={() => setOpenMenu(false)}>Services</a></li>
//               <li><a href="#about" onClick={() => setOpenMenu(false)}>About us</a></li>
//               <li><a href="#faqs" onClick={() => setOpenMenu(false)}>FAQs</a></li>
//               <li><a href="#contact" onClick={() => setOpenMenu(false)}>Contact us</a></li>
//             </ul>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;



import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { GoGlobe } from "react-icons/go";
import { CgMenu } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import LogoSvg from "../SVGs/LogoSvg";
import styles from "./Header.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (openMenu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };

    handleScroll(); // Call the function once to set initial overflow

    // Add event listener to handle scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openMenu]);

  return (
    <div className={styles.header}>
      <div className={styles.formenu}>
        <div className={styles.menubar}>
          <CgMenu className={styles.icon} onClick={() => setOpenMenu(true)} />
        </div>
        <div className={styles.logo}>
          <LogoSvg />
        </div>
      </div>
      <div className={styles.menu}>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <nav>
          <ul>
            <li className={styles.lang}>
              <GoGlobe />
              EN
            </li>
            <li><Link className={styles.link} to="/login">Login</Link></li>
            <li className={styles.signup}><Link className={styles.link} to="/signup">Sign up</Link></li>
          </ul>
        </nav>
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
          <nav className={styles.mobileNav}>
            <ul>
              <li><a href="#home" onClick={() => setOpenMenu(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setOpenMenu(false)}>Services</a></li>
              <li><a href="#about" onClick={() => setOpenMenu(false)}>About us</a></li>
              <li><a href="#faqs" onClick={() => setOpenMenu(false)}>FAQs</a></li>
              <li><a href="#contact" onClick={() => setOpenMenu(false)}>Contact us</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;

