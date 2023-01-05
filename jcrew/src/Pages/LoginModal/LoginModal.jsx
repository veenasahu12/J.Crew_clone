import React from "react";
import { useState } from "react";
import styles from "./LoginModal.module.css";
import { RiCloseLine } from "react-icons/ri";
import SignUpModal from "../SignupModal/SignUpModal";

const LoginModal = ({ setIsOpen }) => {
  const [isOpensignup, setIsOpensignup] = useState(false);

  const [form, setForm] = useState({
    useremail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // console.log(form);
    var login = JSON.parse(localStorage.getItem("signUp")) || [];
    // console.log(login);
    if (form.useremail == login.useremail) {
      alert("SIGN-IN Is Successful");
    } else if (form.useremail != login.useremail) {
      alert("Please fill the right credentials");
    }
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Sign In</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.inputBox}>
              <input
                type="email"
                placeholder="Email Address"
                name="useremail"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.blackSignIn} onClick={handleSubmit}>
                SIGN IN
              </button>
            </div>
            <div className={styles.signupbtn}>
              <h6>Doesn't have an account?</h6>
              <div className="links" onClick={() => setIsOpensignup(true)}>
                Sign Up
              </div>
              {isOpensignup && (
                <SignUpModal setIsOpensignup={setIsOpensignup} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
