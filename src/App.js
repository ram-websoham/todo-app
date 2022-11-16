import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style/App.css";
import PageNotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
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
        </Router>
      </div>
    </>
  );
}

export default App;
