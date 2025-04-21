import React from 'react'
import { useEffect, useState } from 'react'
const Mouse: React.FC = () => {
    const [isVisible, setIsVisibility] = useState<boolean>(false)
useEffect(() =>{
    const handleScroll = () =>{
        setIsVisibility(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll)
    return () =>{
        window.removeEventListener("scroll", handleScroll)
    }
}, [])
 
       const backTotop = () =>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
       }

  return (
    
    <div className="mouse-container"
      style={{
        opacity: isVisible ? "1" : "0",
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s",
      }} onClick={backTotop}>
        <div className="mouse-scroll">
            <div className="mouse-pointer"></div>
        </div>
  </div>

  )
}

export default Mouse
