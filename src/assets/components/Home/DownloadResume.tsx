
import React from 'react'

const DownloadResume = () => {
    const PDF_FILE_URL = "http://localhost:5173/Logo.png"
    const resume = (url:string) =>{
                const filename = url.split("/").pop(); 
                const link = document.createElement("a");
                link.href = url;
                document.body.appendChild(link);
                link.setAttribute("download", filename || 'cv.pdf');
                link.click();
                link.remove();
    }
  return (
    <div>
      <button onClick={() => resume(PDF_FILE_URL)} className=" read-more border-[#DA324A] border-2 bg-none">
        DOWNLOAD CV
      </button>
    </div>
  )
}


export default DownloadResume
