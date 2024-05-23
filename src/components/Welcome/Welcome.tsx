import { useContext } from 'react';
import { ComponentTypeContext } from '../../context/DynamicHomeComponents';
import styles from './Welcome.module.css'
import axios from 'axios';
const Welcome = () => {
  const componentCtx= useContext(ComponentTypeContext)
 
 if (!componentCtx) {
  return null;
}

const token = localStorage.getItem("token");
  
// Set the Authorization header with the token value
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// Make the GET request with Axios
const apiUrl = `${import.meta.env.VITE_APP_API_URL}new/applications`;
axios.get(apiUrl, config)
  .then(response => {
    console.log(response.data);
  
  })
  .catch(error => {
    // Handle the error
    console.error('Error:', error);
  });
  
 const { setCurrentComponent } = componentCtx;
  return (
    <div className={styles.all}>
      <div className={styles.note}>
        <h2>Apply for a Land Allocation</h2>
        <p >Secure Your Piece of Land Today</p>
        <p className={styles.small}>Click on the button below to begin</p>
        <div className={styles.button}><p onClick={()=>{setCurrentComponent('type')}}>Start New Application</p></div>
      </div>
    </div>
  )
}

export default Welcome