import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import OrderReview from "./Components/OrderReview/OrderReview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="orderReview" element={<OrderReview />} />
          <Route path='/grandpa' element={<Grandpa/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
