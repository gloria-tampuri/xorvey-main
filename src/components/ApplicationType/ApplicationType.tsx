import { useContext, useEffect, useState } from 'react'
import { ComponentTypeContext } from '../../context/DynamicHomeComponents'
import IndividualSvg from '../SVGs/IndividualSvg'
import JointSvg from '../SVGs/JointSvg'
import OrganizationSvg from '../SVGs/OrganizationSvg'
import styles from './ApplicationType.module.css'
import { FormContext } from '../../context/DynamicFormContext'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const ApplicationType = () => {
    const navigate = useNavigate(); 

    const componentCtx= useContext(ComponentTypeContext)
    const [status,setStatus]= useState(false)
   const formCtx= useContext(FormContext)
 if (!componentCtx) {
  return null;
}
if (!formCtx) {
    return null;
  }

 const { setCurrentComponent } = componentCtx;


 useEffect(() => {
     // Function to trigger the POST request
     const fetchData = async () => {
         try {
             // Get client reference from localStorage
             const clientReference = localStorage.getItem('clientReference');
             
             // Check if clientReference exists and is a string
             if (!clientReference || typeof clientReference !== 'string') {
                 console.error('Client reference is not valid');
                 return;
             }
   
             // Define the request data
             const requestData = {
                 clientReference: clientReference
             };
   
             // Make the POST request using axios
             const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}transaction/state`, requestData);
             
             // Check if the response is successful
             if (response.status !== 200) {
                 console.error('Network response was not ok:', response);
                 return;
             }
 
             // Extract the data from the response
             const data = response.data;
             
             // Update the status state based on the response data
             setStatus(data.success);
         } catch (error) {
             console.error('There was a problem with the request:', error);
         }
     };
   
     fetchData(); 
 }, []);
 
  

   const moveToIndividualForms = async() => {
    navigate('/payment')
    const user = localStorage.getItem('user');
    let userData = null;

    if (user) {
        try {
            userData = JSON.parse(user);
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }

    const customerName = userData?.name;
    const phoneNumber = userData?.phoneNumber;
    if (status === false && customerName && phoneNumber) {
      const requestData = {
        "serviceId": "individual",
        "customerName": customerName,
        "phoneNumber": phoneNumber
      };

      try {
          const url = `${import.meta.env.VITE_APP_API_URL}pay/transactions`;
          const response = await authorizedFetch(url, requestData);
          localStorage.setItem('checkoutUrl', response?.data?.data.checkoutUrl)
          localStorage.setItem('clientReference', response?.data?.data.clientReference)

      } catch (error) {
          console.error('Error posting data:', error);
      }
  }
    localStorage.setItem('type', 'Individual');
};

 const moveToOrganizationForms=async()=>{
    navigate('/payment')
    const user = localStorage.getItem('user');
    let userData = null;

    if (user) {
        try {
            userData = JSON.parse(user);
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }

    const customerName = userData?.name;
    const phoneNumber = userData?.phoneNumber;
    if (status === false && customerName && phoneNumber) {
      const requestData = {
        "serviceId": "organization",
        "customerName": customerName,
        "phoneNumber": phoneNumber
      };

      try {
          const url = `${import.meta.env.VITE_APP_API_URL}pay/transactions`;
          const response = await authorizedFetch(url, requestData);
          localStorage.setItem('checkoutUrl', response?.data?.data.checkoutUrl)
          localStorage.setItem('clientReference', response?.data?.data.clientReference)

      } catch (error) {
          console.error('Error posting data:', error);
      }
  }
    localStorage.setItem('type', 'Organization')
 }
 const moveToJointForms=async()=>{
    setCurrentComponent('forms')
    navigate('/payment')
    const user = localStorage.getItem('user');
    let userData = null;

    if (user) {
        try {
            userData = JSON.parse(user);
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }

    const customerName = userData?.name;
    const phoneNumber = userData?.phoneNumber;
    if (status === false && customerName && phoneNumber) {
      const requestData = {
        "serviceId": "joint",
        "customerName": customerName,
        "phoneNumber": phoneNumber
      };

      try {
          const url = `${import.meta.env.VITE_APP_API_URL}pay/transactions`;
          const response = await authorizedFetch(url, requestData);
          localStorage.setItem('checkoutUrl', response?.data?.data.checkoutUrl)
          localStorage.setItem('clientReference', response?.data?.data.clientReference)

      } catch (error) {
          console.error('Error posting data:', error);
      }
  }
    localStorage.setItem('type', 'Joint')
 }
  return (
    <div className={styles.all}>
        <div className={styles.container}>
            <h1>Who are you applying for?</h1>
            <p>Please indicate your application type individual, company, or joint.</p>
            <div className={styles.choices} >
                <div className={styles.choice} onClick={moveToIndividualForms} >
                    <IndividualSvg/>
                    <h2>Individual</h2>
                </div>
                <div className={styles.choice} onClick={moveToOrganizationForms} >
                    <OrganizationSvg/>
                    <h2>Organization</h2>
                </div>
                <div className={styles.choice} onClick={moveToJointForms}>
                    <JointSvg/>
                    <h2>Joint</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApplicationType



const authorizedFetch = async (url: string, data: object) => {
  try {
      const token = localStorage.getItem('token');
      if (!token) {
          throw new Error('Authorization token not found');
      }
      const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
      };
      const response = await axios.post(url, data, { headers });
      return response;
  } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
          // Handle unauthorized error if needed
      }
      throw error; // Re-throw the error to handle it in moveToIndividualForms
  }
};