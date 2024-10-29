'use client';
import React, {useState} from 'react'
import { IoIosArrowUp } from 'react-icons/io'
// import Styles from "./Scrollbutton.module.css"


const Scrollbutton = () => {
    const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 400){ 
      setVisible(true) 
    }  
    else if (scrolled <= 400){ 
      setVisible(false) 
    } 
  }; 

window.addEventListener('scroll', toggleVisible);

return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      className={`fixed z-50 block bg-blue-500 w-10 h-10 text-white right-5 bottom-16 overflow-hidden cursor-pointer text-center rounded-sm ${visible ? 'inline' : 'hidden'}`}
    >
      <div className="flex justify-center items-center hover:animate-bounce hover:ease-in-out duration-300">
        <IoIosArrowUp size={30} />
      </div>
    </button>
  );
}  

export default Scrollbutton