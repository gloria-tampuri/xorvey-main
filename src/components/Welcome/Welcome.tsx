import { useContext } from 'react';
import { ComponentTypeContext } from '../../context/DynamicHomeComponents';
import styles from './Welcome.module.css'


const Welcome = () => {
  const componentCtx= useContext(ComponentTypeContext)
 if (!componentCtx) {
  return null;
}


  
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