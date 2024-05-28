import { CiSearch } from "react-icons/ci";
import styles from "./Users.module.css";
import { LuListFilter } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiUserCheck, FiUserMinus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { AddOfficerContext } from "../../context/AddOfficerContext";
import AddOfficers from "../AddOfficers/AddOfficers";

const Users = () => {
  const [showMore, setMore] = useState(false);
  const handleShowmore = () => {
    setMore(!showMore);
  };
 const userCtx= useContext(AddOfficerContext)!
 const {addOfficer,showAddOfficer } = userCtx
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
              <LuListFilter />
              <select>
                <option> Filter</option>
                <option>Denied</option>
                <option>Approved</option>
                <option>Pending</option>
              </select>
            </div>
            <p className={styles.adduser} onClick={showAddOfficer}>Add Officers</p>
          </div>
        </div>
        <div>
          <div className={styles.tablehead}>
            <p className={styles.persons}>
              <span>Name</span>
            </p>
            <p>Email</p>
            <p>Phone Number</p>
            <p>Role</p>
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
          <p>
            <HiOutlineDotsVertical onClick={handleShowmore} />
            {showMore && (
              <div className={styles.more}>
                <p>
                  <MdOutlineRemoveRedEye />
                  View Applications
                </p>
                <p>
                  <FiUserCheck />
                  Activate User
                </p>
                <p>
                  <FiUserMinus />
                  Deactivate User
                </p>
                <p>
                  <RiDeleteBin6Line />
                  Delete user
                </p>
              </div>
            )}
          </p>
        </div>
      </div>
      {addOfficer && <AddOfficers/>}
    </div>
  );
};

export default Users;
