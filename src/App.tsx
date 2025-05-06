import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./assets/components/Landing page/LandingPage"
import "./index.css"

// import Loader from "./loader"

function App() {
  // const [isLoading, setIsLoading] = useState<boolean>(true); // start as true

  // useEffect(() => {
  //   const loadData = () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 4000); // 4 seconds delay
  //   };
  //   loadData();
  // }, []);
  // isLoading ? (
  //   <Loader />
  // ) : 
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
