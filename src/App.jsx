import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import ShortlistedProfiles from "./Pages/ShortlistedProfiles";
import Settings from "./Pages/Settings";
import FilterBar from "./components/Search/FilterBar";
import Search from "./Pages/Search";
import Notifications from "./Pages/Notification";
import MessagingInterface from "./Pages/Messages";
import SignupPage from "./Pages/Auth.jsx/Signup";
import OTP from "./Pages/Auth.jsx/OTP";
import Login from "./Pages/Auth.jsx/Login";
import ForgotPassword from "./Pages/Auth.jsx/ForgotPassword";
import MatchModal from "./components/Profile/MatchModal";
import StepperForm from "./Pages/StepperForm";
import Navbar from "./components/layout/Navbar";

import Layout from "./components/layout/Layout";
import Matches from "./Pages/Matches";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />

          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Signup" element={<SignupPage />} />

          <Route path="/OTP" element={<OTP />} />

          <Route path="/RegistrationForms" element={<StepperForm />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />

            <Route path="/Match" element={<MatchModal />} />

            <Route
              path="/ShortlistedProfiles"
              element={<ShortlistedProfiles />}
            />

            <Route path="/Matches" element={<Matches />} />
            <Route path="/Messages" element={<MessagingInterface />} />
            <Route path="/Settings" element={<Settings />} />

            <Route path="/Search" element={<Search />} />

            <Route path="/Notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
