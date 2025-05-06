

import "./Home.css"
const DownloadResume = () => {
    const PDF_FILE_URL = "./resume.pdf"
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
      <button onClick={() => resume(PDF_FILE_URL)} className=" read-more">
        DOWNLOAD CV
      </button>
    </div>
  )
}


export default DownloadResume
