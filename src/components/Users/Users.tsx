import { CiSearch } from 'react-icons/ci'
import styles from './Users.module.css' 
import { LuListFilter } from 'react-icons/lu'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { MdOutlineRemoveRedEye } from 'react-icons/md'


const Users = () => {
  return (
    <div className={styles.users}>
        <div className={styles.container}>
        <div className={styles.head}>
              <h3>Users</h3>
              <div className={styles.filterDiv}>
                <div className={styles.search}>
                  <CiSearch className={styles.icon} />
                  <input type="text" placeholder="Search applications here" />
                </div>
                <div className={styles.filter}>
                  <LuListFilter/>
                  <select>
                    <option> Filter</option>
                    <option>Denied</option>
                    <option>Approved</option>
                    <option>Pending</option>
                  </select>
                </div>
                <p className={styles.adduser}>Add User</p>
              </div>
            </div>
            <div>
            <div className={styles.tablehead}>
                <p className={styles.persons}>
                  <span>Name</span>
                </p>
                <p>Email</p>
                <p>Phone Number</p>
                <p >Role</p>
                <p>Status</p>
                <p>Action</p>
              </div>
            </div>
            <div className={styles.tablebody}>
                <p>Gloria</p>
                <p>gloria@gmail.com</p>
                <p>010201020102</p>
                <p>Applicant</p>
                <p>Active</p>
                <p><HiOutlineDotsVertical/></p>
            </div>
            <div className={styles.more}>
                <p><MdOutlineRemoveRedEye />View Applications</p>
                <p>Activate User</p>
                <p>Deactivate User</p>
                <p>Delete user</p>
            </div>
        </div>
    </div>
  )
}

export default Users