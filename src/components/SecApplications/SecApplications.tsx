import { Link } from 'react-router-dom'
import styles from './SecApplications.module.css'
import { BsDot } from 'react-icons/bs'
import { HiArrowSmDown, HiOutlineDotsVertical } from 'react-icons/hi'
import { LuListFilter } from 'react-icons/lu'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react'


const SecApplications = () => {
  const [showActions, setShowActions]=useState(false)
  return (
    <div>
        <div className={styles.application}>
      <div className={styles.head}>
        <h3>Applications</h3>
        <div className={styles.filterDiv}>
          <div className={styles.search}>
            <CiSearch className={styles.icon} />
            <input type="text" placeholder="Search applications here" />
          </div>
          <div className={styles.filter}>
            <LuListFilter />
            <select>
              <option> Filter</option>
              <option>Denied</option>
              <option>Approved</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.tablehead}>
          <p className={styles.persons}>
            <span>Applications</span>
            <HiArrowSmDown className="arrow" />
          </p>
          <p>Application type</p>
          <p className="id">Date submited</p>
          {/* <p>Payment Status</p> */}
          <p>Inspector Name</p>
          <p>Status</p>
        </div>
        <div className={styles.tablebody}>
          <div className={styles.id}>
            <input type="checkbox" className="input" />

            <p>01234</p>
          </div>
          <div><p>Organization</p></div>
          <div className={styles.date}>16/08/24</div>
          <div>
            <p>John Doe</p>
          </div>
          {/* <div><p>200.00</p></div> */}
          <div className={styles.status}>
          <p><span><BsDot style={{fontSize:"1.2rem"}}/></span> Approved</p>

              <HiOutlineDotsVertical onClick={()=>{setShowActions(!showActions)}} />
              {showActions && <div> 
                <p>View Application</p>
                <p>Assign Inspector</p>
                </div>}
         </div>
        </div>
        <div className={styles.tablebody}>
          <div className={styles.id}>
            <input type="checkbox" className="input" />

            <p>01234</p>
          </div>
          <div><p>Individual</p></div>
          <div className={styles.date}>16/08/24</div>
          <div>
            <p>jane Doe</p>
          </div>
          {/* <div><p>200.00</p></div> */}
          <div className={styles.status}>
            <p><span><BsDot style={{fontSize:"1.2rem"}}/></span> Approved</p>
            <Link to={`/inspectorhome/id`} className={styles.card}>
              <HiOutlineDotsVertical />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SecApplications