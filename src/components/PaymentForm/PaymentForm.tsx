import styles from './PaymentForm.module.css'
import { FormContext } from "../../context/DynamicFormContext";
import { useContext, useEffect, useState} from 'react';

import { ComponentTypeContext } from '../../context/DynamicHomeComponents';
import { Link,useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const navigate=useNavigate()
    const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [storedCheckoutUrl, setStoredCheckoutUrl] = useState<string | null>(null); // New state variable
    const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(null);



    const formCtx = useContext(FormContext);
    if (!formCtx) {
      return null;
    }
  
    const componentCtx = useContext(ComponentTypeContext);

  if (!componentCtx) {
    return null;
  }

  
      const backhandler =()=>{
        navigate('/applicanthome')
      }
      // useEffect(() => {
      //   const url = localStorage.getItem('checkoutUrl');
      //   if (url) {
      //     setCheckoutUrl(url);
      //     setStoredCheckoutUrl(url);
      //     setIsLoading(false);
      //   }
    
      //   // Cleanup function
      //   return () => {
      //     setCheckoutUrl(null);
      //     setStoredCheckoutUrl(null);
      //     setIsLoading(true);
      //   };
      // }, [storedCheckoutUrl]);
    
      useEffect(() => {
        const url = localStorage.getItem('checkoutUrl');
        if (url) {
          setCheckoutUrl(url);
          setStoredCheckoutUrl(url);
          setIsLoading(false);
          if (loadingTimeout) clearTimeout(loadingTimeout);
        } else {
          // Set a timeout to refresh the page after 3 seconds if checkoutUrl is not set
          const timeout = setTimeout(() => {
            window.location.reload();
          }, 3000);
          setLoadingTimeout(timeout);
        } // Cleanup function
        return () => {
          setCheckoutUrl(null);
          setStoredCheckoutUrl(null);
          setIsLoading(true);
          if (loadingTimeout) clearTimeout(loadingTimeout);
        };
      }, [storedCheckoutUrl, loadingTimeout]);

      const moveToCheckout=()=>{
        localStorage.clear()
      }

  return (
   <div>
    <div className={styles.back} onClick={backhandler}><svg width="62" height="20" viewBox="0 0 62 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8334 10.0003H4.16675M4.16675 10.0003L10.0001 15.8337M4.16675 10.0003L10.0001 4.16699" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.0043 15V4.81818H32.902C33.6378 4.81818 34.2493 4.93419 34.7365 5.16619C35.227 5.39489 35.5933 5.7081 35.8352 6.10582C36.0805 6.50355 36.2031 6.95431 36.2031 7.4581C36.2031 7.8724 36.1236 8.22704 35.9645 8.52202C35.8054 8.81368 35.5916 9.05066 35.3232 9.23295C35.0547 9.41525 34.7547 9.54616 34.4233 9.62571V9.72514C34.7846 9.74503 35.1309 9.85606 35.4624 10.0582C35.7971 10.2571 36.0705 10.5388 36.2827 10.9034C36.4948 11.268 36.6009 11.7088 36.6009 12.2259C36.6009 12.7528 36.4732 13.2268 36.218 13.6477C35.9628 14.0653 35.5784 14.3951 35.0646 14.6371C34.5509 14.879 33.9046 15 33.1257 15H29.0043ZM30.8487 13.4588H32.8324C33.5019 13.4588 33.9841 13.3312 34.2791 13.076C34.5774 12.8175 34.7266 12.486 34.7266 12.0817C34.7266 11.7801 34.652 11.5083 34.5028 11.2663C34.3537 11.0211 34.1416 10.8288 33.8665 10.6896C33.5914 10.5471 33.2633 10.4759 32.8821 10.4759H30.8487V13.4588ZM30.8487 9.14844H32.6733C32.9915 9.14844 33.2782 9.09044 33.5334 8.97443C33.7886 8.85511 33.9891 8.68774 34.1349 8.4723C34.2841 8.25355 34.3587 7.99503 34.3587 7.69673C34.3587 7.30232 34.2195 6.97751 33.9411 6.7223C33.666 6.46709 33.2566 6.33949 32.7131 6.33949H30.8487V9.14844ZM40.3233 15.1541C39.8394 15.1541 39.4036 15.0679 39.0158 14.8956C38.6313 14.7199 38.3264 14.4614 38.101 14.12C37.879 13.7786 37.7679 13.3577 37.7679 12.8572C37.7679 12.4264 37.8475 12.0701 38.0066 11.7884C38.1657 11.5066 38.3828 11.2812 38.6578 11.1122C38.9329 10.9432 39.2428 10.8156 39.5875 10.7294C39.9355 10.6399 40.2952 10.5753 40.6664 10.5355C41.1138 10.4891 41.4767 10.4477 41.7551 10.4112C42.0336 10.3714 42.2357 10.3118 42.3617 10.2322C42.4909 10.1494 42.5556 10.0218 42.5556 9.84943V9.8196C42.5556 9.44508 42.4445 9.15507 42.2225 8.94957C42.0004 8.74408 41.6806 8.64134 41.263 8.64134C40.8221 8.64134 40.4725 8.73745 40.214 8.92969C39.9587 9.12192 39.7864 9.34896 39.6969 9.6108L38.0165 9.37216C38.1491 8.90814 38.3678 8.52036 38.6728 8.20881C38.9777 7.89394 39.3506 7.65862 39.7914 7.50284C40.2322 7.34375 40.7194 7.2642 41.253 7.2642C41.6209 7.2642 41.9872 7.30729 42.3517 7.39347C42.7163 7.47964 43.0494 7.62216 43.351 7.82102C43.6526 8.01657 43.8946 8.28338 44.0769 8.62145C44.2625 8.95952 44.3553 9.3821 44.3553 9.8892V15H42.6252V13.951H42.5655C42.4561 14.1631 42.302 14.362 42.1032 14.5476C41.9076 14.7299 41.6607 14.8774 41.3624 14.9901C41.0674 15.0994 40.7211 15.1541 40.3233 15.1541ZM40.7907 13.8317C41.1519 13.8317 41.4651 13.7604 41.7303 13.6179C41.9954 13.4721 42.1993 13.2798 42.3418 13.0412C42.4876 12.8026 42.5605 12.5424 42.5605 12.2607V11.3608C42.5042 11.4072 42.4081 11.4503 42.2722 11.4901C42.1396 11.5298 41.9905 11.5646 41.8248 11.5945C41.659 11.6243 41.495 11.6508 41.3326 11.674C41.1702 11.6972 41.0293 11.7171 40.91 11.7337C40.6415 11.7701 40.4012 11.8298 40.1891 11.9126C39.977 11.9955 39.8096 12.1115 39.687 12.2607C39.5643 12.4065 39.503 12.5954 39.503 12.8274C39.503 13.1589 39.624 13.4091 39.8659 13.5781C40.1079 13.7472 40.4161 13.8317 40.7907 13.8317ZM49.4959 15.1491C48.7336 15.1491 48.079 14.9818 47.5321 14.647C46.9886 14.3123 46.5693 13.8499 46.2743 13.2599C45.9827 12.6667 45.8368 11.9839 45.8368 11.2116C45.8368 10.4361 45.986 9.75166 46.2843 9.15838C46.5826 8.56179 47.0035 8.09777 47.5471 7.76633C48.0939 7.43158 48.7402 7.2642 49.486 7.2642C50.1058 7.2642 50.6543 7.37855 51.1316 7.60724C51.6122 7.83262 51.995 8.15246 52.28 8.56676C52.565 8.97775 52.7275 9.45833 52.7672 10.0085H51.0471C50.9775 9.64062 50.8117 9.33404 50.5499 9.08878C50.2914 8.8402 49.945 8.71591 49.5108 8.71591C49.1429 8.71591 48.8198 8.81534 48.5414 9.0142C48.263 9.20975 48.0459 9.49148 47.8901 9.85938C47.7376 10.2273 47.6614 10.6681 47.6614 11.1818C47.6614 11.7022 47.7376 12.1496 47.8901 12.5241C48.0426 12.8954 48.2563 13.1821 48.5314 13.3842C48.8098 13.5831 49.1363 13.6825 49.5108 13.6825C49.776 13.6825 50.013 13.6328 50.2218 13.5334C50.4339 13.4306 50.6112 13.2831 50.7537 13.0909C50.8962 12.8987 50.994 12.665 51.0471 12.3899H52.7672C52.7241 12.9302 52.565 13.4091 52.29 13.8267C52.0149 14.241 51.6403 14.5658 51.1664 14.8011C50.6924 15.0331 50.1356 15.1491 49.4959 15.1491ZM55.8857 12.6037L55.8807 10.4311H56.169L58.9134 7.36364H61.0163L57.6406 11.1222H57.2678L55.8857 12.6037ZM54.245 15V4.81818H56.0447V15H54.245ZM59.0376 15L56.5518 11.5249L57.7649 10.2571L61.1903 15H59.0376Z" fill="#667085"/>
</svg>
</div>
     <div className={styles.all}>
    <div className={styles.basicForm}>
       <div className={styles.head}>
           <h3>Application form purchase</h3>
           <p>Please note that a purchase is required to access the application form</p>
       </div>
       <div className={styles.form}>
       <form>
       {checkoutUrl ? (
                                <Link to={checkoutUrl} className={styles.buttons} onClick={moveToCheckout}>
                                    {isLoading ? 'loading' : 'Click Here to make payments'}
                                </Link>
                            ) : (
                                <button disabled className={styles.buttons}>
                                    Loading...
                                </button>
                            )}
            </form>
       </div>
   </div>
      
  </div>
   </div>    )
}

export default PaymentForm

