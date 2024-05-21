import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import LogoSvg from "../SVGs/LogoSvg";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { grey, green } from "@mui/material/colors";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cheif from "/src/assets/Images/Frame 137.png";
import cert from "/src/assets/Images/ALLOCATION CERTIFICATION.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 2,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to access the history object for navigation
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  //Timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining.seconds > 0) {
        setTimeRemaining((prevState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }));
      } else if (timeRemaining.minutes > 0) {
        setTimeRemaining((prevState) => ({
          minutes: prevState.minutes - 1,
          seconds: 59,
        }));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const api = `${import.meta.env.VITE_APP_API_URL}auth/login`;

 
  
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      emailOrPhone: email,
      password: password,
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
        const responseData = await response.json();
  
        // Convert the user object to a string before storing in local storage
        localStorage.setItem("user", JSON.stringify(responseData.user));
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", responseData.user.role);
        
        if (responseData.user.role === "APPLICANT") {
          // Retrieve the token from local storage
          const token = localStorage.getItem("token");
  
          // Set the Authorization header with the token value
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
  
          // Make the GET request with Axios
          const apiUrl = `${import.meta.env.VITE_APP_API_URL}new/applications`;
          axios.get(apiUrl, config)
            .then(response => {
              // Handle the successful response
              console.log(response.data);
              if (response.data.success) {
                // Navigate to my applications
                navigate("/myapplications");
              }
            })
            .catch(error => {
              // Handle the error
              console.error('Error:', error);
            });
  
          navigate("/applicanthome");
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={styles.signUp}>
      <div className={styles.left}>
        <img src={cheif} alt="Bear land" />
      </div>
      <div className={styles.right}>
        <Link to="/" className={styles.logo}>
          <LogoSvg />
        </Link>
        <img src={cert} alt="certifcation text" />
        <div className={styles.form}>
          <h3>Log in</h3>
          <form onSubmit={loginHandler}>
            <div className={styles.section}>
              <label>Email or Phone Number</label>
              <input
                type="text"
                placeholder="Enter your email or phone number"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.section}>
              <label>Password</label>
              <div className={styles.sectionPassword}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <div className={styles.forgetdiv}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isEnabled}
                      onChange={handleToggle}
                      sx={{
                        "& .MuiSwitch-track": {
                          backgroundColor: isEnabled ? green[500] : grey[500],
                        },
                        "& .MuiSwitch-thumb": {
                          backgroundColor: "#FFFFFF",
                        },
                      }}
                    />
                  }
                  label="Remember Me"
                />
                <Link className={styles.forgot} to="/forgotpassword">
                  Forgot password?
                </Link>
              </div>
            </div>
            <button type="submit" disabled={loading}>{loading ?<AiOutlineLoading3Quarters style={{fontSize:"2rem"}}/>: 'Login'}</button>
          </form>
          <p className={styles.note}>
            Don't have an account?
            <Link to="/signup" className={styles.span1}>
              <span> Sign up</span>
            </Link>
          </p>
        </div>
        <div className={styles.foot}>
          <p>© 2024 ApplicationCertification. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
