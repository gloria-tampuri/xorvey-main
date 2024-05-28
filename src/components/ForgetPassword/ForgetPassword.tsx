import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from 'react-icons/io5';
import LogoSvg from '../SVGs/LogoSvg';
import styles from './ForgetPassword.module.css';
import cert from "/src/assets/Images/ALLOCATION CERTIFICATION.png"
import bare from "/src/assets/Images/Frame 137 (2).png"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ForgotPassword = () => {
  const [emailSignin, setEmailSignin] = useState(false);
  const [showopt, setShowopt] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 2,
    seconds: 0,
  });
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpValues, setOtpValues] = useState(['', '', '', '']); // State to hold OTP values
  const[otpValue, setOtpValue]= useState('')
  const otpInputs = useRef<HTMLInputElement[] | null>(null);
  const navigate = useNavigate(); // Hook to access the history object for navigation
  const [loading, setLoading] = useState(false); // State to track loading

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  useEffect(() => {
    
    if(showopt){
      const timer = setInterval(() => {
        setTimeRemaining(prevState => {
          if (prevState.seconds > 0) {
            return { ...prevState, seconds: prevState.seconds - 1 };
          } else if (prevState.minutes > 0) {
            return { minutes: prevState.minutes - 1, seconds: 59 };
          } else {
            clearInterval(timer);
            return prevState;
          }
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }
  }, [showopt]);

  const api = `${import.meta.env.VITE_APP_API_URL}password/forgot`;



  const handleEmailReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); 

    const data = {
      email: email,
    };
  
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        const resetPswd = responseData.link;
  
        const userId = resetPswd.match(/\/resetPswd\/(\d+)\//)[1];
  
        localStorage.setItem('userId', userId.toString());
  
        navigate('/resetpassword');
      } else {
        alert("Email does not exist, please signup!");      }
    } catch (error) {
      console.error('Error occurred during password reset:', error);
    }finally{
      setLoading(false)
    }
  };
  

  const phoneapi = `${import.meta.env.VITE_APP_API_URL}password/otp-send`;

  const handlePhoneReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading when submitting

    const data = {
      phoneNumber: phoneNumber,
    };

    try {
      const response = await fetch(phoneapi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
            if (response.ok) {
              const responseData = await response.json();
              console.log(responseData);
              localStorage.setItem('optPrefix', JSON.stringify(responseData)); // Stringify responseData before storing
              setShowopt(true);
      } else {
        const responseData = await response.json();
        const errorMessage = responseData.message || "Failed to reset password. Please try again.";
        alert(errorMessage);      }
    } catch (error) {
      console.error('Error occurred during password reset:', error);
    }finally{
      setLoading(false)
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailSignin) {
      handleEmailReset(e);
    } else {
      handlePhoneReset(e);
    }
  };


  const handleOtpInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  
    if (value.length === 1 && otpInputs.current) {
      if (index < otpInputs.current.length - 1) {
        otpInputs.current[index + 1]?.focus();
      } else {
        // If it's the last input, blur the current field to dismiss the keyboard
        e.target.blur();
      }
    }
  
    // Join otpValues array to get the complete OTP value
    const otpString = newOtpValues.join('');
    setOtpValue(otpString);
    console.log('OTP:', otpString);
  };
  



  const optapi =  `${import.meta.env.VITE_APP_API_URL}password/otp-verify`;

  const handleOptVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    // Retrieve the optPrefix from localStorage
    const optPrefixString = localStorage.getItem('optPrefix');
  
    if (!optPrefixString) {
      console.error('optPrefix is missing from localStorage');
      return;
    }
  
    // Parse the optPrefix string into an object
    const optPrefix = JSON.parse(optPrefixString);
  
    // Extract requestId and prefix from the optPrefix object
    const { requestId, prefix } = optPrefix;
  
  
    if (!requestId || !prefix || !otpValue) {
      console.error('One or more required items are missing');
      return;
    }
  
    const data = {
      requestId: requestId,
      prefix: prefix,
      code: otpValue
    };
  
    try {
      const response = await fetch(optapi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        navigate('/resetpassword')
        setShowopt(true);
      } else {
        console.error('Password reset failed:', response.statusText);
        alert('Invalid token or token has expired')
      }
    } catch (error) {
      console.error('Error occurred during password reset:', error);
    }finally{
      setLoading(false)
    }
  }

  const resendOTP=async()=>{
    const resendoptapi =  `${import.meta.env.VITE_APP_API_URL}password/resend-otp`;
   setLoading(true)
     // Retrieve the optPrefix from localStorage
     const optPrefixString = localStorage.getItem('optPrefix');
  
     if (!optPrefixString) {
       return;
     }
   
     // Parse the optPrefix string into an object
     const optPrefix = JSON.parse(optPrefixString);
   
     // Extract requestId and prefix from the optPrefix object
     const { requestId, prefix } = optPrefix;
   
   
     if (!requestId || !prefix || !otpValue) {
       return;
     }
    const data={
   "requestId": requestId
    }
    try {
      const response = await fetch(resendoptapi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        setShowopt(true);
      } else {
      }
    } catch (error) {
      console.error('Error occurred during password reset:', error);
    }finally{
      setLoading(false)
    }
  }
  
  
  return (
    <div className={styles.signUp}>
      <div className={styles.left}>
        <img src={bare} alt="Bare land" />
      </div>
      <div className={styles.right}>
        <Link to="/" className={styles.logo}>
          <LogoSvg />
        </Link>
        <img src={cert} alt="certifcation text" />
        {showopt ? (
          <div className={styles.opt}>
            <h3>Check Your mail</h3>
            <p>We’ve sent a code to your phone number</p>
            <form onSubmit={handleOptVerify}>
            <div className={styles.inputs}>
              <input className={styles.test}
                ref={(el) => { if (el && !otpInputs.current) otpInputs.current = [el]; }} 
                type="text" 
                maxLength={1} 
                placeholder="0" 
                onChange={(e) => handleOtpInputChange(0, e)} 
              />
              <input 
                ref={(el) => { if (el) otpInputs.current?.push(el); }} 
                type="text" 
                maxLength={1} 
                placeholder="0" 
                onChange={(e) => handleOtpInputChange(1, e)} 
              />
              <input 
                ref={(el) => { if (el) otpInputs.current?.push(el); }} 
                type="text" 
                maxLength={1} 
                placeholder="0" 
                onChange={(e) => handleOtpInputChange(2, e)} 
              />
              <input 
                ref={(el) => { if (el) otpInputs.current?.push(el); }} 
                type="text" 
                maxLength={1} 
                placeholder="0" 
                onChange={(e) => handleOtpInputChange(3, e)} 
              />
            </div>
            <div>
              Code expires in
              <span>{`${formatTime(timeRemaining.minutes)}:${formatTime(timeRemaining.seconds)}`}</span>
            </div>
            <div className={styles.forward}>
              <p className={styles.resend} onClick={resendOTP}>Resend Code</p>
              <button className={styles.login} type="submit" disabled={loading}>{loading ?<AiOutlineLoading3Quarters/>:'Log in' }</button>
            </div>
            </form>
          
            <Link className={styles.note} to="/login">
              <IoArrowBackOutline /> Back to Login
            </Link>
          </div>
        ) : (
          <div>
            <div className={styles.form}>
              <h3>Forgot password</h3>
              <form onSubmit={handleSubmit}>
                {emailSignin ? (
                  <div className={styles.section}>
                    <label>Email*</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className={styles.section}>
                    <label>Phone Number*</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                )}
                <button type="submit" disabled={loading}>{loading ?<AiOutlineLoading3Quarters/>:'Submit' }</button>
              </form>
              <Link className={styles.note} to="/login">
                <IoArrowBackOutline /> Back to Login
              </Link>
            </div>
            {emailSignin ? (
              <p onClick={() => setEmailSignin(false)} className={styles.note}>
                Reset with phone number
              </p>
            ) : (
              <p onClick={() => setEmailSignin(true)} className={styles.note}>
                Reset with email
              </p>
            )}
          </div>
        )}
        <div className={styles.foot}>
          <p>© 2024 ApplicationCertification. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

