import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Explore from "./pages/explore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
