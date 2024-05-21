import styles from './DocProgressBar.module.css'
const DocProgressBar = () => {
  return (
    <div className={styles.bar}>
    <div className={styles.line}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_685_58497)">
<rect width="24" height="24" rx="12" fill="#ECFDF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.38967L9.9365 14.2997L8.0365 12.2697C7.6865 11.9397 7.1365 11.9197 6.7365 12.1997C6.3465 12.4897 6.2365 12.9997 6.4765 13.4097L8.7265 17.0697C8.9465 17.4097 9.3265 17.6197 9.7565 17.6197C10.1665 17.6197 10.5565 17.4097 10.7765 17.0697C11.1365 16.5997 18.0065 8.40967 18.0065 8.40967C18.9065 7.48967 17.8165 6.67967 17.0965 7.37967V7.38967Z" fill="#039855"/>
</g>
<defs>
<clipPath id="clip0_685_58497">
<rect width="24" height="24" rx="12" fill="white"/>
</clipPath>
</defs>
</svg>

<span className={styles.horizontal1}></span>  
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

</div>  )
}

export default DocProgressBar