import { Link } from 'react-router-dom';
import styles from './InspectHome.module.css'
import { IoIosArrowRoundUp } from "react-icons/io";
import { HiArrowSmDown, HiOutlineDotsVertical } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import Ticket from '../Ticket/Ticket';
import { LuListFilter } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';

const InspectHome = () => {
  return (
    <div className={styles.dash}>
        <div className={styles.details}>
            <div className={styles.dashcard}>
                <p>Assigned Applications</p>
                <div className={styles.lower}>
                    <h1>20</h1>
                    <p><IoIosArrowRoundUp/>100</p>
                </div>
            </div>
            <div className={styles.dashcard}>
                <p>Approved Applications</p>
                <div className={styles.lower}>
                    <h1>10</h1>
                    <p><IoIosArrowRoundUp/>100</p>
                </div>
            </div>
            <div className={styles.dashcard}>
                <p>Denied Applications</p>
                <div className={styles.lower}>
                    <h1>5</h1>
                    <p><IoIosArrowRoundUp/>100</p>
                </div>
            </div>
        </div>
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
          <p>Time Assigned</p>
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
            <p>06:10</p>
          </div>
          {/* <div><p>200.00</p></div> */}
          <div className={styles.status}>
          <p><span><BsDot style={{fontSize:"1.2rem"}}/></span> Approved</p>
            <Link to={`/inspectorhome/id`} className={styles.card}>
              <HiOutlineDotsVertical />
            </Link>          </div>
        </div>{" "}
        <div className={styles.tablebody}>
          <div className={styles.id}>
            <input type="checkbox" className="input" />

            <p>01234</p>
          </div>
          <div><p>Individual</p></div>
          <div className={styles.date}>16/08/24</div>
          <div>
            <p>17:00</p>
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
      <Ticket/>
    </div>
  )
}

export default InspectHome