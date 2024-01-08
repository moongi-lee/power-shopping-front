import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home";

export default function Router() {
  return (
      <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<HomePage/>}/>
          <Route path="/gpt" element={<HomePage/>}/>
          <Route path="/account" element={<HomePage/>}/>
          <Route path="/setting" element={<HomePage/>}/>
        </Routes>
      </>
  )
}