import "./App.css";
import Rootlayouts from "./components/layouts/Rootlayouts";
import Home from "./components/pages/Home";
import Shop from "./components/pages/shop";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Rootlayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
