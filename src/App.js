import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./Components/products/Products";
import Singlecomp from "./Routes/Singlecomp";
import Cartcomp from "./Routes/Cartcomp";
import Homecomp from "./Routes/Home/Homecomp";
import Login from "./Components/login/Login";
import ScrollToTop from "react-scroll-to-top";



function App() {
 
  // const[loading,setloading]=useState(false)

  //   useEffect(()=>{
  //    setloading(true)
  //    setTimeout(()=>{
  //     setloading(false)
  //          },9400)   
  //   },[])
 
 
      return (
 
    <>
    <ScrollToTop smooth color="#6f00ff" style={{display:"inline"}}/>
      {/* loading?<Loading/>:   */}
       <Routes>
       <Route path="/" element={<Homecomp />} />
       <Route path='/products' element={<Products />} />
       <Route path='/products/:id' element={<Singlecomp />} />
       <Route path='/cart' element={<Cartcomp />} />
       <Route path='/Login' element={<Login />} />
    
     </Routes>
       


     
    </>
  );
}

export default App;
