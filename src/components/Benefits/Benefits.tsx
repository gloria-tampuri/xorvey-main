import BookSvg from '../SVGs/BookSvg'
import CubeSvg from '../SVGs/CubeSvg'
import WaveSvg from '../SVGs/WaveSvg'
import styles from './Benefits.module.css'

const Benefits = () => {
  return (
    <div className={styles.benefits}>
        <h4 className={styles.benefit}>Benefits</h4>
        <h1>UNLOCK THE ADVANTAGES OF</h1>
        <h1 className={styles.h2}>ALLOCATION CERTIFICATION</h1>

        <div className={styles.allgrids}>
            <div className={styles.grid1}>
                <div className={styles.bene}>
                    <div className={styles.icon}><BookSvg/></div>
                    <h4>Secure land Ownership</h4>
                    <p>By establishing robust legal frameworks and effective mechanisms, we aim to guarantee individuals and communities have unequivocal and legally protected rights to their land. This not only fosters stability within communities but also minimizes disputes and uncertainties related to land ownership.</p>
                </div>
                <div className={styles.bene}>
                <div className={styles.icon}><CubeSvg/></div>
                    <h4>Facilitate development projects</h4>
<p>Our objective is to create an environment where land ownership is transparent, accessible, and supportive of development initiatives. By doing so, we can encourage and facilitate investment in infrastructure, housing, and other vital projects that contribute to community growth and prosperity.</p>                </div>
                <div className={styles.bene}>
                <div className={styles.icon}><BookSvg/></div>
                    <h4>Streamline inheritance processes</h4>
<p>We seek to simplify and modernize the often complex and cumbersome procedures associated with transferring land ownership from one generation to the next. By streamlining inheritance processes, we aim to promote fairness, ensure the preservation of family legacies, and reduce the administrative burden on heirs.</p>                </div>
                <div className={styles.bene}>
                <div className={styles.icon}><WaveSvg/></div>
                    <h4>Enhance property value</h4>
<p>Implementing policies and practices that increase the desirability and marketability of land and properties, leading to improved economic prospects and quality of life for owners and communities.
</p>                </div>
            </div>
            <div className={styles.grid2}>
                <div className={styles.pic1}></div>
                <div className={styles.pic2}></div>
                <div className={styles.pic3}></div>
                <div className={styles.pic4}></div>
            </div>
        </div>
    </div>
  )
}

export default Benefits