import Register from "./Components/Register/Register";
import {Routes, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Dashboard/Welcome";
import ResetPassword from "./Components/ChangePassword/ResetPassword";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";



function App() {
  return (
      <Routes>
          <Route index element={<Login />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ResetPassword/:token" element={<ResetPassword />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
  );
}

export default App;
