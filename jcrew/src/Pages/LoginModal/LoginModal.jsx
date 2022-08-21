import React from "react";
import { useState } from "react";
import styles from "./LoginModal.module.css";
import { RiCloseLine } from "react-icons/ri";
import SignUpModal from "../SignupModal/SignUpModal";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {IsAuth} from "../../store/action"

const LoginModal = ({ setIsOpen }) => {
    const [isOpensignup, setIsOpensignup] = useState(false);
    const [users , setUsers] = useState([]);
    const dispatch = useDispatch()

    const [form,setForm] = useState({
      useremail:"",
      password: "",
  });


  const handleChange = (e) => {
      const {name , value} = e.target
  
      setForm({
        ...form,
        [name] : value,
      })
    }
  
    const handleSubmit = (e) => {
      // console.log(form)
      var match = false;
      var loggedinusers = {}

      users.forEach(element => {
        if(element.useremail === form.useremail && element.password === form.password){
          match = true;
          loggedinusers = element
          return
        }
      });
      if(match){
        setIsOpen(false)
        // console.log(loggedinusers,"loggedinusers")
        dispatch(IsAuth(loggedinusers))
        alert("LOGIN SUCCESSFUL")
      }else{
        alert("NO ACCOUNT FOUND")
        setIsOpensignup(true)
      }
    };

    useEffect(()=>{
      axios.get("https://my-jcrew-api.herokuapp.com/users")
      .then((r)=> {
      // console.log(r.data)
           setUsers(r.data)
      })
    },[setUsers])
    
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Sign In</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} >
            <RiCloseLine  />
          </button>
          <div className={styles.modalContent}>
            
                <div className={styles.inputBox}>
                <input type="email" placeholder="Email Address" name="useremail" onChange={handleChange}/>
                </div>
                <div className={styles.inputBox}>
                <input type="text" placeholder="Enter Password" name="password" onChange={handleChange}/>
                </div>
            
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.blackSignIn} onClick={handleSubmit}>SIGN IN</button>
            </div>
            <div className={styles.signupbtn}>
                <h6>Doesn't have an account?</h6>
                <div  className='links' onClick={() => setIsOpensignup(true)}>
                Sign Up
                </div>
               {isOpensignup && <SignUpModal setIsOpensignup={setIsOpensignup} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;