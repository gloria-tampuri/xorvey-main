import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import LogoSvg from "../SVGs/LogoSvg";
import axios from "axios";
import PasswordValidation from "../PasswordValidation/PasswordValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import bearland from "/src/assets/Images/Frame 137 (4).png" 
import cert from "/src/assets/Images/ALLOCATION CERTIFICATION.png"
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [passwordStart, setPasswordStart] = useState(false); 
  const [loading, setLoading] = useState(false); // State to track loading

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordStart(true)
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate(); 

  const [passwordMeetsCriteria, setPasswordMeetsCriteria] =
    useState<boolean>(true);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  useEffect(() => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?/~]).{8,}$/;
    setPasswordMeetsCriteria(regex.test(password));
  }, [password]);

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading when submitting

    const url = `${import.meta.env.VITE_APP_API_URL}auth/signup`;
    try {
      const response = await axios.post(
        url,
        {
          confirmPassword: confirmPassword,
          email: email,
          name: name,
          newPassword: password,
          occupation: occupation,
          phoneNumber: phone,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/login");
        setConfirmPassword("");
        setPassword("");
      }
    } catch (error) {
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className={styles.signUp}>
      <div className={styles.left}>
        <img src={bearland} alt="Cheif on a stool" />
      </div>
      <div className={styles.right}>
        <Link className={styles.logo} to="/">
          <LogoSvg />
        </Link>
        <img
          src={cert}
          alt="certifcation text"
        />
        <div className={styles.form}>
          <h3>Sign up</h3>
          <form onSubmit={signUpHandler}>
            <div className={styles.section}>
              <label>Full name*</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className={styles.section}>
              <label>Phone*</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.section}>
              <label>Occupation</label>
              <input
                type="text"
                placeholder="Enter your occupation"
                required
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <div className={styles.section}>
              <label>Password*</label>
              <div className={styles.sectionPassword}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handlePasswordOnChange}
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
              <label>Confirm password*</label>
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
              {confirmPassword.trim() !== "" && !passwordsMatch && (
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
            <button type="submit" disabled={loading}>{loading ? <AiOutlineLoading3Quarters style={{fontSize:"2rem"}}/> : 'Register'}</button>
          </form>
          <p className={styles.note}>
            Already have an account?{" "}
            <Link className={styles.span} to="/login">
              Log in
            </Link>
          </p>
        </div>
        <div className={styles.foot}>
          <p>© 2024 ApplicationCertification. All rights reserved.</p>
        </div>
      </div>
      {(!passwordMeetsCriteria && passwordStart) && <PasswordValidation />}
      
    </div>
  );
};

export default SignUp;
