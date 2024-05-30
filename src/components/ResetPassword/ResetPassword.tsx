import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import LogoSvg from "../SVGs/LogoSvg";
import { IoArrowBackOutline } from "react-icons/io5";
import PasswordValidation from "../PasswordValidation/PasswordValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import land from '/src/assets/Images/Frame 137 (3).png'
import cert from "/src/assets/Images/ALLOCATION CERTIFICATION.png"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMeetsCriteria, setPasswordMeetsCriteria] =
    useState<boolean>(true);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setPasswordsMatch(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  useEffect(() => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?/~]).{8,}$/;
    setPasswordMeetsCriteria(regex.test(newPassword));
  }, [newPassword]);

  const api = `${import.meta.env.VITE_APP_API_URL}password/reset`;


  const passwordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    let optPrefixString = localStorage.getItem("optPrefix");
    let userID;
  
    if (!optPrefixString) {
      userID = localStorage.getItem("userId");
    } else {
      const optPrefix = JSON.parse(optPrefixString);
      const { userId } = optPrefix;
      userID = userId;
    }
    const officerid = Number(localStorage.getItem("id"));
    const data = {
      userId: parseInt(userID) || officerid, // Convert userID to integer
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
  
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Clear optPrefix from localStorage
        localStorage.removeItem("optPrefix");
        localStorage.removeItem("userId");
        navigate("/login");
      } else {
        const responseData = await response.json();
        const errorMessage =
          responseData.message || "Failed to reset password. Please try again.";
        alert(errorMessage);
      }
    } catch (error) {
      alert(
        "An error occurred during password reset. Please try again later."
      );
    }finally{
      setLoading(false)
    }
  };
  
  
  return (
    <div className={styles.signUp}>
      <div className={styles.left}>
        <img src={land} alt="Bare land" />
      </div>
      <div className={styles.right}>
        <Link to="/" className={styles.logo}>
          <LogoSvg />
        </Link>
        <img
          src={cert}
          alt="certification text"
        />

        <div className={styles.form}>
          <h3>Reset Password</h3>
          <form onSubmit={passwordReset}>
            <div className={styles.section}>
              <label>New password</label>
              <div className={styles.sectionPassword}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash
                    className={styles.eyeIcon}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye
                    className={styles.eyeIcon}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            <div className={styles.section}>
              <label> Confirm Password*</label>
              <div className={styles.sectionPassword}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash
                    className={styles.eyeIcon}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye
                    className={styles.eyeIcon}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              {!passwordsMatch && confirmPassword.trim() !== "" && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    paddingTop: "0.4rem",
                  }}
                >
                  Passwords do not match!
                </p>
              )}
            </div>

            <button type="submit" disabled={loading}>{loading ?<AiOutlineLoading3Quarters/>: 'Change password'}</button>
          </form>
          <Link className={styles.note} to="/login">
            <IoArrowBackOutline /> Back to Log in
          </Link>
        </div>
        <div className={styles.foot}>
          <p>© 2024 ApplicationCertification. All rights reserved.</p>
        </div>
        {!passwordMeetsCriteria && <PasswordValidation />}
      </div>
    </div>
  );
};

export default ResetPassword;
