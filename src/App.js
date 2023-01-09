import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import ContractUs from "./Components/Contract/ContractUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contract" element={<ContractUs></ContractUs>}></Route>
        </Routes>
      </BrowserRouter>

      {/* )} */}

      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </div>
  );
}

export default App;
