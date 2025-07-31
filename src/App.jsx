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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Profile" element={<Profile />} />

          <Route
            path="/ShortlistedProfiles"
            element={<ShortlistedProfiles />}
          />

          <Route path="/Messages" element={<MessagingInterface />} />
          <Route path="/Settings" element={<Settings />} />

          <Route path="/Search" element={<Search />} />

          <Route path="/Notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
