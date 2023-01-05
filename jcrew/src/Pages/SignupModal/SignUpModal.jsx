import {React,useState} from "react";
import styles from "./SignUpModal.module.css";
import { RiCloseLine } from "react-icons/ri";
import LoginModal from "../LoginModal/LoginModal";
// import axios from "axios";

const SignUpModal = ({ setIsOpensignup }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [form,setForm] = useState({
        useremail:"",
        password: "",
        cartitem:[],
        wishlist:[],
    });

    const handleChange = (e) => {
        const {name , value} = e.target
    
        setForm({
          ...form,
          [name] : value,
        })
      }
    
      const handleSubmit = () => {
        // console.log(form)
        localStorage.setItem("signUp",JSON.stringify(form));
        alert("Acount Is Created Successfully");
      }
      // const handleSubmit = (e) => {
      //   axios.post("https://api.jsonbin.io/v3/b/63943e56962da34f538c0ad0",
      //    form
      //   )
      //   .then((r) => {
      //     alert("SUCCESS");
      //     console.log(r)
      //   })
      //   .catch((err) => {
      //     console.log(err.message)
      //     alert("Error");
      //   })
      // };
    
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpensignup(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Sign UP</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpensignup(false)}>
            <RiCloseLine  />
          </button>
          <div className={styles.modalContent}>
            
                <div className={styles.inputBox}>
                <input name="useremail" type="email" placeholder="Email Address" onChange={handleChange}/>
                </div>
                <div className={styles.inputBox}>
                <input name="password" placeholder="Enter Password" onChange={handleChange}/>
                </div>
           
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.blackSignIn} onClick={handleSubmit} >SIGN UP</button>
            </div>
            <div className={styles.signupbtn}>
                <h6>Already have an account?</h6>
                <div  className='links' onClick={() => setIsOpen(true)}>
                Sign IN
                </div>
               {isOpen && <LoginModal setIsOpen={setIsOpen} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;