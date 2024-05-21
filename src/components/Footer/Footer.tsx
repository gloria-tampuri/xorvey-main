import { FooterIcons } from "../SVGs/SmallSocials"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>© 2024 ApplicationCertification. All rights reserved.</p>
        <div><FooterIcons/></div>
    </div>
  )
}

export default Footer