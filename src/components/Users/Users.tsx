

import { CiSearch } from "react-icons/ci";
import styles from "./Users.module.css";
import { LuListFilter } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiUserCheck, FiUserMinus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AddOfficerContext } from "../../context/AddOfficerContext";
import AddOfficers from "../AddOfficers/AddOfficers";
import axios from "axios";

interface Users {
  name: string;
  phoneNumber: string;
  activeStatus: boolean;
  email: string;
  role: string;
}

const Users = () => {
  const [activeUserIndex, setActiveUserIndex] = useState<number | null>(null);
  const handleShowmore = (index: number) => {
    setActiveUserIndex(activeUserIndex === index ? null : index);
  };

  const userCtx = useContext(AddOfficerContext)!;
  const { addOfficer, showAddOfficer } = userCtx;

  const [allUsers, setUsers] = useState<Users[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      console.log(token);

      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}all/users`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('Response:', response.data);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error making request:', error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(number => (
      <span key={number} onClick={() => handleClick(number)} className={currentPage === number ? styles.active : ''}>
        {number}
      </span>
    ));
  };

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
                <option>Filter</option>
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
        {currentUsers.map((user, index) => (
          <div key={index} className={styles.tablebody}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phoneNumber}</p>
            <p>{user.role}</p>
            <p>{user.activeStatus ? 'Active' : 'Not Active'}</p>
            <p>
              <HiOutlineDotsVertical onClick={() => handleShowmore(index)} />
              {activeUserIndex === index && (
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
        ))}
        <div className={styles.pagination}>
          <span onClick={handlePrevious} className={currentPage === 1 ? styles.disabled : ''}>  Previous</span>
          <div>          {renderPageNumbers()}
</div>
          <span onClick={handleNext} className={currentPage === totalPages ? styles.disabled : ''}>Next</span>
        </div>
      </div>
      {addOfficer && <AddOfficers />}
    </div>
  );
};

export default Users;
