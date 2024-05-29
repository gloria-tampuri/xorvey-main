// import { Link } from 'react-router-dom'
// import styles from './SecApplications.module.css'
// import { BsDot } from 'react-icons/bs'
// import { HiArrowSmDown, HiOutlineDotsVertical } from 'react-icons/hi'
// import { LuListFilter } from 'react-icons/lu'
// import { CiSearch } from 'react-icons/ci'
// import { useEffect, useState } from 'react'
// import axios from 'axios'


// const SecApplications = () => {
//   const [showActions, setShowActions]=useState(false)
//   const [allApplications, setApplications]=useState<Form[]>([]);
//   interface Form {
//     uniqueFormID: string;
//     type: string;
//     createdAt: string;
//     status: string;
//     token: string;
//     serviceId: string;
//     formStatus: string;
//     clientReference: string;
//     applicantName: string;

//   }
// useEffect(() => {
//   const fetchApplications = async () => {
//     const token = localStorage.getItem('token');
//     console.log(token);

//     if (!token) {
//       console.error('No token found');
//       return;
//     }

//     try {
//       const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}all/forms`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       console.log('Response:', response.data);
//       setApplications(response.data.forms);
//     } catch (error) {
//       console.error('Error making request:', error);
//     }
//   };

//   fetchApplications();
// }, []); 

// console.log(allApplications);
//   return (
//     <div>
//         <div className={styles.application}>
//       <div className={styles.head}>
//         <h3>Applications</h3>
//         <div className={styles.filterDiv}>
//           <div className={styles.search}>
//             <CiSearch className={styles.icon} />
//             <input type="text" placeholder="Search applications here" />
//           </div>
//           <div className={styles.filter}>
//             <LuListFilter />
//             <select>
//               <option> Filter</option>
//               <option>Denied</option>
//               <option>Approved</option>
//               <option>Pending</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className={styles.tablehead}>
//           <p className={styles.persons}>
//             <span>Applications</span>
//             <HiArrowSmDown className="arrow" />
//           </p>
//           <p>Application type</p>
//           <p className="id">Date submited</p>
//           {/* <p>Payment Status</p> */}
//           <p>Inspector Name</p>
//           <p>Status</p>
//           <p>Actions</p>
//         </div>
//         {allApplications.map((app)=><div className={styles.tablebody}>
//           <div className={styles.id}>
//             <input type="checkbox" className="input" />

//             <p>{app.uniqueFormID}</p>
//           </div>
//           <div><p>{app.type}</p></div>
//           <div className={styles.date}>16/08/24</div>
//           <div>
//             <p>{app.applicantName}</p>
//           </div>
//           {/* <div><p>200.00</p></div> */}
//           <div className={styles.status}>
//           <p><span><BsDot style={{fontSize:"1.2rem"}}/></span> {app.status}</p>
//          </div>
//          <div>  <HiOutlineDotsVertical onClick={()=>{setShowActions(!showActions)}} />
//               {showActions && <div> 
//                 <p>View Application</p>
//                 <p>Assign Inspector</p>
//                 </div>}</div>
//         </div>)}
        
//       </div>
//     </div>
//     </div>
//   )
// }

// export default SecApplications

import styles from './SecApplications.module.css';
import { BsDot } from 'react-icons/bs';
import { HiArrowSmDown, HiOutlineDotsVertical } from 'react-icons/hi';
import { LuListFilter } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ShowActionsMap {
  [key: string]: boolean;
}

BsDot
const SecApplications = () => {
  const [showActionsMap, setShowActionsMap] = useState<ShowActionsMap>({});
  const [allApplications, setApplications] = useState<Form[]>([]);

  interface Form {
    uniqueFormID: string;
    type: string;
    createdAt: string;
    status: string;
    token: string;
    serviceId: string;
    formStatus: string;
    clientReference: string;
    applicantName: string;
  }

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        console.error('No token found');
        return;
      }
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}all/forms`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log('Response:', response.data);
        setApplications(response.data.forms);
      } catch (error) {
        console.error('Error making request:', error);
      }
    };
    fetchApplications();
  }, []);

  console.log(allApplications);

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
            <p>Actions</p>
          </div>
          {allApplications.map((app) => (
            <div key={app.uniqueFormID} className={styles.tablebody}>
              <div className={styles.id}>
                <input type="checkbox" className="input" />
                <p>{app.uniqueFormID}</p>
              </div>
              <div>
                <p>{app.type}</p>
              </div>
              <div className={styles.date}>16/08/24</div>
              <div>
                <p>{app.applicantName}</p>
              </div>
              {/* <div><p>200.00</p></div> */}
              <div className={styles.status}>
                <p>
                  <span>
                    <BsDot style={{ fontSize: '1.2rem' }} />
                  </span>{' '}
                  {app.status}
                </p>
              </div>
              <div className={styles.actions}>
                <HiOutlineDotsVertical
                  onClick={() => {
                    setShowActionsMap((prevShowActionsMap) => ({
                      ...prevShowActionsMap,
                      [app.uniqueFormID]: !prevShowActionsMap[app.uniqueFormID],
                    }));
                  }}
                />
                {showActionsMap[app.uniqueFormID] && (
                  <div className={styles.action1}>
                    <p>View Application</p>
                    <p>Assign Inspector</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecApplications;