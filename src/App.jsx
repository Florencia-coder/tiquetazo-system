import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "./pages/Menu";
import Tables from "./pages/Tables";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar
        closeOnClick
        pauseOnHover={false}
        draggable
        transition={Zoom}
        theme="dark"
        toastStyle={{
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "4px 8px",
        }}
      />
      <Routes>
        <Route path="/" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
