import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import './style/responsive.css';
import "./style/App.css";
import PageNotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bg from "./components/Bg";

function App() {
  return (
    <>
      <Bg />
      <div>
        <Navbar />
      </div>
      <div className="App">
          <Routes>
            {/* <Route exact path="" element={<Home />} /> */}
            <Route exact path="/" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
