import styles from './Hero.module.css'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className={styles.hero} >
        <h1>Empowering Communities </h1>
        <h1>Through Stool Land Certification</h1>
        <p>Transforming Tradition, Securing Futures: Join us as we modernize the Stool Land Certification process to empower communities, promote sustainable development, and safeguard cultural heritage.</p>
        <Link to='/signup' className={styles.button}>Get started now</Link>
    </div>
  )
}

export default Hero