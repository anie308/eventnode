import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Explore from "./pages/explore";
import Signup from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
