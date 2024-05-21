import styles from './BasicProgressBar.module.css'
const BasicProgressBar = () => {
  return (
    <div className={styles.bar}>
        <div className={styles.line}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="12" fill="#ECFDF3"/>
<circle cx="12" cy="12" r="4" fill="#039855"/>
</svg>
<span className={styles.horizontal}></span>  
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_685_58420)">
<rect width="24" height="24" rx="12" fill="#F9FAFB"/>
<circle cx="12" cy="12" r="4" fill="#EAECF0"/>
</g>
<defs>
<clipPath id="clip0_685_58420">
<rect width="24" height="24" rx="12" fill="white"/>
</clipPath>
</defs>
</svg>
<span className={styles.horizontal}></span>  
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_685_58420)">
<rect width="24" height="24" rx="12" fill="#F9FAFB"/>
<circle cx="12" cy="12" r="4" fill="#EAECF0"/>
</g>
<defs>
<clipPath id="clip0_685_58420">
<rect width="24" height="24" rx="12" fill="white"/>
</clipPath>
</defs>
</svg>
 </div>
 <div className={styles.words}>
    <div>
        <p>Basic Information</p>
        <p>Please provide your information</p>
    </div>
    <div>
        <p>Document Upload</p>
        <p>Upload the following documents</p>
    </div>
    <div>
        <p>Land Details</p>
        <p>Provide Land Details </p>
    </div>
 </div>

    </div>
  )
}

export default BasicProgressBar