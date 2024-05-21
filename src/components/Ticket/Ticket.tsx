import { useState } from 'react'
import styles from './Ticket.module.css'
import { BsTicketPerforated } from "react-icons/bs";
const Ticket = () => {
    const [openForm, setOpenForm]=useState(false)
  return (
    <div className={styles.ticket}>
       {openForm && <div className={styles.ticketForm}>
            <h3>Raise a ticket</h3>
            <p><BsTicketPerforated className={styles.icon}/>Report a problem</p>
            <form>
                <div className={styles.section}>
                    <label>Email*</label>
                    <input type='text' required placeholder='Type your email address here'/>
                </div>
                <div className={styles.section}>
                    <label>What Issue do you want to report?*</label>
                    <input type='text' required placeholder='Type  name of  issue'/>
                </div>
                <div className={styles.section}>
                    <label>Application Number</label>
                    <input type='text' required placeholder='Type application number'/>
                </div>
                <div className={styles.section}>
                    <label>Prioritize the issue*</label>
                    <select>
                        <option>Moderate</option>
                        <option>Critical</option>
                    </select>
                </div>
                <div className={styles.section}>
                    <label>A brief description of the Problem*</label>
                    <textarea
                  rows={4}
                  cols={40}
                  placeholder="Enter a description..."
                />
                </div>
                <div className={styles.buttons}>
                    <button onClick={()=>{setOpenForm(false)}} className={styles.cancel}>Cancel</button> <button type='submit' className={styles.submit}>Submit Issue</button>
                </div>
            </form>
        </div>}
       <div className={styles.button}>
       <div className={styles.ticketbutton} onClick={()=>{setOpenForm(!openForm)}}>
       <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9995 9.00298C12.2344 8.33515 12.6981 7.77201 13.3085 7.4133C13.9188 7.05459 14.6364 6.92347 15.3342 7.04316C16.0319 7.16284 16.6648 7.52561 17.1207 8.06721C17.5767 8.60881 17.8262 9.29429 17.8251 10.0022C17.8251 12.0007 14.8274 13 14.8274 13M14.866 17H14.8793M14.6661 23.6667C20.9254 23.6667 25.9995 18.5926 25.9995 12.3333C25.9995 6.07411 20.9254 1 14.6661 1C8.40692 1 3.33281 6.07411 3.33281 12.3333C3.33281 13.6 3.54061 14.8181 3.92397 15.9555C4.06824 16.3835 4.14037 16.5975 4.15338 16.7619C4.16623 16.9243 4.15652 17.0381 4.11635 17.1959C4.07568 17.3558 3.98587 17.522 3.80627 17.8544L1.62539 21.8911C1.31431 22.4669 1.15877 22.7548 1.19358 22.977C1.2239 23.1706 1.33781 23.341 1.50504 23.443C1.69705 23.5601 2.02254 23.5265 2.67353 23.4592L9.50156 22.7534C9.70834 22.732 9.81172 22.7213 9.90596 22.7249C9.99864 22.7284 10.0641 22.7371 10.1545 22.758C10.2464 22.7792 10.3619 22.8237 10.593 22.9127C11.8571 23.3997 13.2304 23.6667 14.6661 23.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
       </div>
    </div>
  )
}

export default Ticket